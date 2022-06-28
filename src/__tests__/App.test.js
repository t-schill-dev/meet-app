import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../Components/EventList/EventList';
import CitySearch from '../Components/CitySearch/CitySearch';
import NumberOfEvents from '../Components/NumberOfEvents';
import { mockData } from '../../src/mock-data';
import { extractLocations, getEvents } from '../../src/api';



describe('<App/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    })
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('CitySearch component included', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('NumberOfEvent component included', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

//Integration testing
describe('<App/> integration', () => {
    let AppWrapper;
    beforeEach(() => {
        AppWrapper = mount(<App />)
    })
    afterEach(() => {
        AppWrapper = AppWrapper.unmount()
    })
    test('App passes "evets" state as prop to Eventlist', () => {
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    });
    test('App passes "locations" state as prop to CitySearch', () => {
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    })
    test('get list of events matching the city selected', async () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectIndex];
        //Instance method allows to call any function from component
        await CitySearchWrapper.instance().handleItemClick(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
    });
    test('get list of all events when user selects "See all cities"', async () => {
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        //Simlulate click of last list item "See all cities"
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
    });
})