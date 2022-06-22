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
  })
});