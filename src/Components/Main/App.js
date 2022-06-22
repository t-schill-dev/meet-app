import React, { Component } from 'react';
import EventList from '../EventList/EventList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div title='main'
        className='App' >
        < EventList events={[{}, {}]} />
      </div>

    );
  }
}

export default App;