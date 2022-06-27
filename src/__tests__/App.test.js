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
    test('App passes "evets" state as prop to Eventlist', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    })
})