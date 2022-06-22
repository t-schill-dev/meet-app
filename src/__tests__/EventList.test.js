import React from 'react';
import { shallow } from 'enzyme';

import EventList from '../Components/EventList/EventList';
import Event from '../Components/Event/Event'

describe('EvenList component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(
      <EventList events={
        [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      />
    );
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
})