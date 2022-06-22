import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../Components/CitySearch/CitySearch';

describe('<CitySearch/> Component', () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(< CitySearch />);
  })
  test('render text input with class city', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  test('renders list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
  test('renders text input correctly', () => {
    //test passes when user types into textbox and changing state to query
    //compare prop values of .city elements with the query
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query)
  })
});