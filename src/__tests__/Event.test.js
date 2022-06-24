import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Components/Event/Event'

describe('<Event> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })
  test('details button available', () => {
    expect(EventWrapper.find('.button')).toHaveLength(1);
  })
  test('change state by button click', () => {
    EventWrapper.setState({ visible: false });
    EventWrapper.find('.button').simulate('click');
    expect(EventWrapper.state('visible')).toBe(true);
  })

})