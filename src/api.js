import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress'

export const extractLocations = (events) => {
    let extractLocations = events.map((event) => event.location);
    let locations = [...new Set(extractLocations)];
    return locations;
}

const checkToken = async(accessToken) => {
    const result = await fetch(
            `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
        )
        .then((res) => res.json())
        .catch((err) => err.json())

    return result;
}

export const getEvents = async() => {
    NProgress.start();

    if (window.location.href.startsWith('http://localhost')) {
        NProgress.done();
        return mockData;
    }

    const token = await getAccessToken();

    if (token) {
        removeQuery();
        const url = 'https://d256su3iob.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/' + token;
        const result = await axios.get(url);
        if (result.data) {
            let locations = extractLocations(result.data.events);
            localStorage.setItem('lastEvents', JSON.stringify(result.data));
            localStorage.setItem('locations', JSON.stringify(locations))
        }
        NProgress.done();
        return result.data.events;
    }
}

//Check if there is a path and build URL with current path or pushState
const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
        let newurl =
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname;

        window.history.pushState('', '', newurl);
    } else {
        let newurl = window.location.protocol + '//' + window.location.host;
        window.history.pushState('', '', newurl)
    }
}

const getToken = async(code) => {

    try {
        const encodeCode = encodeURIComponent(code);
        const response = await fetch('https://d256su3iob.execute-api.eu-central-1.amazonaws.com/dev/api/token/' + encodeCode)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const { access_token } = await response.json();
        access_token && localStorage.setItem('access_token', access_token);
        return access_token;
    } catch (error) {
        error.json();
    }
}

export const getAccessToken = async() => {
    //first authorization try
    const accessToken = localStorage.getItem('access_token');
    //if no access token available, execute the following
    const tokenCheck = accessToken && (await checkToken(accessToken))

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem('access_token');
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get('code');
        //if no authorizaton code was found, redirect to google auth
        if (!code) {
            const results = await axios.get(
                'https://d256su3iob.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl)
        }
        return code && getToken(code);
    }
    return accessToken;
}