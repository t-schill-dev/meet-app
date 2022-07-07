import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../Components/NumberOfEvents';
//--------Feature 3------------//

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(< NumberOfEvents />)
  });

  test('render correct input number', () => {
    expect(NumberOfEventsWrapper.find('.number').length).toBe(1);
  });
})