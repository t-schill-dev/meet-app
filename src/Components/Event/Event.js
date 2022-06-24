import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  handleShowDetails = (prevState) => {
    this.setState({
      visible: !prevState.visible
    })
  }
  render() {
    return (
      <div className='event'>
        <div className='summary'></div>
        <div className='dateTime'></div>
        <div className='location'></div>
        {this.state.visible ? (
          <p className='eventDescription'>{this.props.event.description}</p>
        ) : null}
        {/*Render hide details button when eventDescription is rendered*/}
        <button
          className='button'
          onClick={() => this.handleShowDetails(this.state)}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
      </div >
    )
  }
}

export default Event;