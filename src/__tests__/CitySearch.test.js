import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../Components/CitySearch/CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api'

describe('<CitySearch/> Component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
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
  test('change state when input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  })
  test('render list of suggestions correctly', () => {

    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    //expected length + 1 because of "See all cities suggestion" at the end
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i])
    }
  })
  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find('.city').simulate('change', {
      target: { value: 'Berlin' }
    });
    const query = CitySearchWrapper.state('query');
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1
    });
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
  })
});