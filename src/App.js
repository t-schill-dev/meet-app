import React, { Component } from 'react';
import EventList from './Components/EventList/EventList';
import CitySearch from './Components/CitySearch/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: []
    }
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      })
    })
  }
  componentDidMount() {
    //make sure it is mounted before populating the state
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <div title='main'
        className='App' >
        <CitySearch locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>

    );
  }
}

export default App;