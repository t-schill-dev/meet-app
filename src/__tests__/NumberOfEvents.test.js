import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../Components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  })

  test('render correct input number', () => {
    expect(NumberOfEventsWrapper.find('.number').length).toBe(1);
  })
  test('renders text input correctly', () => {
    //test passes when user types into textbox and changing state to query
    //compare prop values of .city elements with the query
    const query = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(query)
  })
  test('change state when input changes', () => {
    NumberOfEventsWrapper.setState({
      query: '3'
    });
    const eventObject = { target: { value: '12' } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe('12');
  })
})