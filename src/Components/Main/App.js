import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import CitySearch from '../CitySearch/CitySearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div title='main'
        className='App' >
        <CitySearch />
        < EventList events={[{}, {}]} />
      </div>

    );
  }
}

export default App;