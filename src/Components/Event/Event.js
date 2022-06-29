import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { SiGooglemaps } from 'react-icons/si'
import { BsCalendar2Event } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  convertDateEvent = (date) => {
    return new Date(date).toLocaleDateString()
  }
  convertTimeEvent = (date) => {
    return new Date(date).toLocaleTimeString().slice(0, -3)
  }
  handleShowDetails = (prevState) => {
    this.setState({
      visible: !prevState.visible
    })
  }

  render() {
    const { event } = this.props;
    return (
      <div className='event' >
        <Card>
          <Card.Header className='summary'>
            {event.summary}

            <Button className='button details-button'
              onClick={() => this.handleShowDetails(this.state)}>
              {this.state.visible ? 'Hide details' : 'Show details'}
            </Button>

          </Card.Header>
          <Card.Body>
            <Card.Title className='dateTime'>
              <BsCalendar2Event fill='rgb(124, 175, 196)' />
              &nbsp; {this.convertDateEvent(event.start.dateTime)}<br />
              <BiTime />&nbsp; {this.convertTimeEvent(event.start.dateTime)}
            </Card.Title>
            <Card.Text className='location d-flex flex-column align-items-center'>
              <h6><AiOutlineInfoCircle fill='rgb(124, 175, 196)' />&nbsp; {event.status}</h6>
              <h6><SiGooglemaps fill='rgb(124, 175, 196)' />&nbsp; {event.location}</h6>
            </Card.Text>
            {this.state.visible ? (
              <Card.Text className='eventDescription'>{event.description}</Card.Text>
            ) : null}
          </Card.Body>
        </Card>
      </div>

    )
  }
}

export default Event;