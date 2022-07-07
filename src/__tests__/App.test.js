import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../Components/EventList/EventList';
import CitySearch from '../Components/CitySearch/CitySearch';
import NumberOfEvents from '../Components/NumberOfEvents';
import { mockData } from '../../src/mock-data';
import { extractLocations, getEvents } from '../../src/api';

const locations = extractLocations(mockData)

describe('<App/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(< App />);
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

//Integration testing Eventlist, CitySearch, NumberOfEvents
describe('<App/> integration', () => {


    test('App passes "events" state as prop to Eventlist', () => {
        const AppWrapper = mount(< App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
    test('App passes "locations" state as prop to CitySearch', () => {
        const AppWrapper = mount(< App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });
    test('App passes "numberOfEvents" state as a prop to numberOfEvents comp', () => {
        const AppWrapper = mount(< App />);
        const AppNumberState = AppWrapper.state('numberOfEvents');
        expect(AppNumberState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppNumberState);
        AppWrapper.unmount();
    });
    test('get list of events matching the city selected', async () => {
        const AppWrapper = mount(< App />);
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
        AppWrapper.unmount();
    });
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(< App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        //Simlulate click of last list item "See all cities"
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
    });
    test('change state of NOE when input changes', () => {
        const AppWrapper = mount(< App />);
        AppWrapper.setState({
            numberOfEvents: '3'
        });
        const eventObject = { target: { value: '15' } };
        AppWrapper.find('.number').simulate('change', eventObject);
        expect(AppWrapper.state('numberOfEvents')).toBe(15);
    });

})