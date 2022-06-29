import React, { Component } from 'react';
import EventList from './Components/EventList/EventList';
import CitySearch from './Components/CitySearch/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
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
        console.log(this.state.events)
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