import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import CitySearch from '../CitySearch/CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../../mock-data';
import { extractLocations, getEvents } from '../../api';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: []
    }
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      })
    })
  }

  render() {
    return (
      <div title='main'
        className='App' >
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        < EventList events={this.state.events} />
        <NumberOfEvents />
      </div>

    );
  }
}

export default App;