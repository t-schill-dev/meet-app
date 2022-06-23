import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import CitySearch from '../CitySearch/CitySearch';
import { mockData } from '../../mock-data';
import { extractLocations } from '../../api';
import './App.css';

class App extends Component {
  render() {
    return (
      <div title='main'
        className='App' >
        <CitySearch locations={extractLocations(mockData)} />
        < EventList events={[{}, {}]} />
      </div>

    );
  }
}

export default App;