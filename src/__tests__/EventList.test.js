import React from 'react';
import { shallow } from 'enzyme';

import EventList from '../Components/EventList/EventList';
import Event from '../Components/Event/Event'
import { mockData } from '../mock-data';

describe('EvenList component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(
      <EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
})