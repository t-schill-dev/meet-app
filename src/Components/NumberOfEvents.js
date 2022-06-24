import React, { Component } from 'react';

export class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: ''
    }
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        NumberOfEvents
        <input
          className='number'
        />
      </div>
    )
  }
}

export default NumberOfEvents;