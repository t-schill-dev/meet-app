import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Components/Event/Event'

describe('<Event> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event overview', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  })

})