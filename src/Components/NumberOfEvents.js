import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

export class NumberOfEvents extends Component {
  state = {
    infoText: ''
  }

  handleInputChange = (e) => {
    let newValue = parseInt(e.target.value);
    if ((newValue > 33) || (newValue < 1)) {
      this.setState({
        infoText: 'Please choose a number between 1 and 32',
      })
    } else {
      this.setState({
        infoText: '',
      })
    }
    this.props.updateEvents(undefined, newValue);
  }


  render() {
    return (
      <div className='numberOfEvents' >
        NumberOfEvents
        <input
          className='number events_number__input'
          type='number'
          placeholder='Number of events to show'
          onChange={this.handleInputChange} />
        <ErrorAlert id='errorAlert' text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;