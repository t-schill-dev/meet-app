import React, { Component } from 'react';
import Event from '../Event/Event';
import { Row, Col } from 'react-bootstrap'

/*Component renders a list of events that take place in the city the user has selected*/
class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <Row className='EventList d-flex justify-content-center' >
        {events.map(event => (
          <Col md={6} key={event.id}>
            <Event event={event} />
          </Col>
        ))
        }
      </Row>
    );
  }
};

export default EventList;