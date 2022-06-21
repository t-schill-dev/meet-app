import React from 'react';
import { render, screen } from '@testing-library/react';
import EventList from '../Components/EventList';
import App from '../Components/App';

describe('EvenList component', () => {
  test('render correct number of events', () => {
    render(
      <EventList events={
        [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      />
    );
    const ListItem = screen.getAllByRole('listitem')
    expect(ListItem).toHaveLength(4);
  });
})