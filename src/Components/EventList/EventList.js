import React, { Component } from 'react';
import Event from '../Event/Event';

/*Component renders a list of events that take place in the city the user has selected*/
class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul className='EventList' > {
        events.map(event => {
          return (
            <li key={event.id} >
              <Event event={event}
              />
            </li>
          )
        }
        )
      } </ul>
    );
  }
};

export default EventList;