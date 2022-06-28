import React, { Component } from 'react';

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
    return new Date(date).toLocaleTimeString()
  }
  handleShowDetails = (prevState) => {
    this.setState({
      visible: !prevState.visible
    })
  }

  render() {
    return (<div className='event' >
      <div className='summary'>{this.props.event.summary}</div>
      <div className='dateTime'>
        {this.convertDateEvent(this.props.event.start.dateTime)}
        <p>{this.convertTimeEvent(this.props.event.start.dateTime)}</p>
        <p>- {this.convertTimeEvent(this.props.event.end.dateTime)}</p>
      </div>
      <div className='location'>{this.props.event.location}</div>
      {this.state.visible ? (
        <p className='eventDescription' >{this.props.event.description}</p>
      ) : null
      } { /*Render hide details button when eventDescription is rendered*/}
      <button className='button'
        onClick={
          () => this.handleShowDetails(this.state)} >{this.state.visible ? 'Hide details' : 'Show details'}</button>
    </div >
    )
  }
}

export default Event;