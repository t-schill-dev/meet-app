import React, { Component } from 'react';

export class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = ({
      query: '',
      numberOfEvents: '32'
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
      <div className='NumberOfEvents'>
        NumberOfEvents
        <input
          className='number'
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default NumberOfEvents;