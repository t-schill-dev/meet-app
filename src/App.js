import React, { Component } from 'react';
import EventList from './Components/EventList/EventList';
import CitySearch from './Components/CitySearch/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import './App.css';
<<<<<<< Updated upstream
=======
import './nprogress.css';
import { WarningAlert } from './Components/Alert';
import { ResponsiveContainer } from 'recharts';
import { Legend, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import ScatterChartComp from './Components/Charts/scatterchart';
import { EventGenre } from './Components/Charts/EventGenre';
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
        console.log(this.state.events)
      }
    });
=======
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
>>>>>>> Stashed changes
  }

  componentWillUnmount() {
    this.mounted = false;
  }
<<<<<<< Updated upstream
  render() {
=======

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
    console.log('data in main: ', data)
    return data;
  }

  // promptOfflineWarning = () => {
  //   if (!navigator.onLine) {
  //     console.log('you are offline')
  //     this.setState({
  //       warningText: 'You are offline, so events may not be up to date'
  //     })
  //   }
  // }

  render() {
    // if (this.state.showWelcomeScreen === undefined) return <div className="App" />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

          <EventList events={this.state.events} />

=======
          {!navigator.onLine && <WarningAlert text={'You are offline, so events may not be up to date'} />}
          <div className='data-vis-wrapper'>
            <EventGenre events={this.state.events} locations={this.state.locations} />
            <ResponsiveContainer height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="number of events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend verticalAlign="top" height={36} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <EventList events={this.state.events} />
          {/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} /> */}
>>>>>>> Stashed changes
        </Container>
      </div>

    );
  }
}

export default App;