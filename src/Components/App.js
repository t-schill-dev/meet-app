import React, { Component } from 'react';
import EventList from './EventList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div title='main' className='App' >
        < EventList />
      </div>

    );
  }
}

export default App;