import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

export class NumberOfEvents extends Component {
  state = {
    infoText: ''
  }

  handleInputChange = (e) => {
    let newValue = e.target.value;
    if ((newValue > 33) || (newValue < 1)) {
      this.setState({
        infoText: 'Please choose a number between 1 and 32',
      })
    } else {
      this.props.updateEvents(undefined, newValue);
      this.setState({
        infoText: '',
      })
    }

  }


  render() {
    return (
      <div className='numberOfEvents' >
        <label className='number-label' htmlFor='citysearch'>Number of events to see</label>
        <input
          className='number events_number__input'
          type='number'
          value={this.props.numberOfEvents}
          onChange={this.handleInputChange}
        />
        <ErrorAlert id='errorAlert' text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;
