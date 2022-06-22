import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../Components/CitySearch/CitySearch';

describe('<CitySearch/> Component', () => {
  test('render text input with class city', () => {
    const CitySearchWrapper = shallow(< CitySearch />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
});