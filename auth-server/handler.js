const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const credentials = {
    client_id: process.env.CLIENT_ID,
    project_id: process.env.PROJECT_ID,
    client_secret: process.env.CLIENT_SECRET,
    calendar_id: process.env.CALENDAR_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    redirect_uris: ["https://t-schill-dev.github.io/meet-app"],
    javascript_origins: ["https://t-schill-dev.github.io", "http://localhost:8080"]
};

const { client_id, client_secret, redirect_uris, calendar_id } = credentials;

const oAuth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
);
// Generate an URL first to get authorized with Google
module.exports.getAuthURL = async() => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            authUrl: authUrl
        })
    };
};

/*--------Step 2: Getting Access Token---------*/

module.exports.getAccessToken = async(event) => {
        const oAuth2Client = new OAuth2(
            client_id,
            client_secret,
            redirect_uris[0]
        );
        //Decode auth code extracted from the URL query
        const code = decodeURIComponent(`${event.pathParameters.code}`);

        return new Promise((resolve, reject) => {
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(token);
                });
            })
            .then((token) => {
                //Respond with OAuth token
                return {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(token),
                };
            })
            .catch((err) => {
                console.error(err);
                return {
                    statusCode: 500,
                    body: JSON.stringify(err)
                };
            });
    }
    /*--------Step 3: Getting Calendar events---------*/
module.exports.getCalendarEvents = async(event) => {

    const oAuth2Client = new OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    const access_token = decodeURIComponent(`${event.pathParameters.code}`);
    oAuth2Client.setCredentials({ access_token });

    return new Promise((resolve, reject) => {

            calendar.events.list({
                    calendarId: calendar_id,
                    auth: oAuth2Client,
                    timeMin: new Date().toISOString(),
                    singleEvents: true,
                    orderBy: "startTime",
                },
                (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                }
            );
        })
        .then(results => {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({ events: results.data.items }),

            }
        })
        .catch((err) => {
            console.error(err);
            return {
                statusCode: 500,
                body: JSON.stringify(err)
            };
        });
}