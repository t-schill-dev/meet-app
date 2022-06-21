import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../Components/EventList';

describe('EvenList component', () => {
  test('render correct number of events', () => {
    const { result } = render(< EventList events={
      [{}, {}, {}, {}]}
    />);

    expect(result).toHaveLength(4);
  });
})