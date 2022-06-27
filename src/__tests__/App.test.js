import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../Components/Main/App';
import EventList from '../Components/EventList/EventList';
import CitySearch from '../Components/CitySearch/CitySearch';
import NumberOfEvents from '../Components/NumberOfEvents';


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
})