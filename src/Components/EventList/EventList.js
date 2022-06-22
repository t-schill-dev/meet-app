import React, { Component } from 'react';
import Event from '../Event/Event';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul data-testid='eventList' className='EventList' >
        {
          events.map(event => {
            return (
              <li key={event.id} >
                < Event event={event} />
              </li>
            )
          }


          )
        } </ul >
    );
  }
};

export default EventList;