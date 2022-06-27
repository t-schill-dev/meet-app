import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import CitySearch from '../CitySearch/CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../../mock-data';
import { extractLocations } from '../../api';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }
  render() {
    return (
      <div title='main'
        className='App' >
        <CitySearch locations={extractLocations(mockData)} />
        < EventList events={this.state.events} />
        <NumberOfEvents />
      </div>

    );
  }
}

export default App;