import React, { Component } from 'react';

export class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = ({
      query: '',
      numberOfEvents: ''
    })
  }
  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      query: value,
      numberOfEvents: value
    });
  }

  render() {
    return (
      <div className='numberOfEvents' >
        NumberOfEvents
        <input className='number events_number__input'
          type='number'
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default NumberOfEvents;