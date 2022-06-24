import React from 'react';
import { shallow, mount } from 'enzyme';
import Event from '../Components/Event/Event'
import { mockData } from '../mock-data';

describe('<Event> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  })
  test("render event dateTime", () => {
    expect(EventWrapper.find(".dateTime")).toHaveLength(1);
  });
  test("render event location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test('details button available', () => {
    expect(EventWrapper.find('.button')).toHaveLength(1);
  })
  test('change state by button click', () => {
    EventWrapper.setState({ visible: false });
    EventWrapper.find('.button').simulate('click');
    expect(EventWrapper.state('visible')).toBe(true);
  })
  test('render description element', () => {
    EventWrapper.setState({ visible: true });
    expect(EventWrapper.find('.eventDescription')).toBeDefined();
    expect(EventWrapper.find('.eventDescription').text()).toBe(
      mockData[0].description
    )
  });

})