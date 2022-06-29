import React, { Component } from 'react';
import Header from './Components/Header'
import EventList from './Components/EventList/EventList';
import CitySearch from './Components/CitySearch/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import './nprogress.css';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: '12'
  }


  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      //filter events by eventcount
      const filteredEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: filteredEvents
      })
    })
  }
  componentDidMount() {
    //make sure it is mounted before populating the state
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        // console.log('events before state: ', events)
        this.setState({
          events: events,
          locations: extractLocations(events)
        });

      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <div title='main' className='App' >
        <Header />
        <Container>
          <Row className="d-flex justify-content-center align-item-center p-3 m-3">
            <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-5">
              <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
            </Col>
          </Row>

          <EventList events={this.state.events} />

        </Container>
      </div>

    );
  }
}

export default App;