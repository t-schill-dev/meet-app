import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
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
        <button className='button'
          onClick={() => this.handleShowDetails(this.state)}>
        </button>
      </div >
    )
  }
}

export default Event;