import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../Components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  test('render correct input number', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number').length).toBe(1);
  })
})