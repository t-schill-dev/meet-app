import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/Main/App';
import EventList from '../Components/EventList/EventList';
import CitySearch from '../Components/CitySearch/CitySearch';




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
});