import React, { Component } from 'react';
import Header from './Components/Header'
import EventList from './Components/EventList/EventList';
import CitySearch from './Components/CitySearch/CitySearch';
import NumberOfEvents from './Components/NumberOfEvents';
import WelcomeScreen from './Components/WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import './nprogress.css';
import { WarningAlert } from './Components/Alert';
import { ResponsiveContainer } from 'recharts';
import ScatterChartComp from './Components/Charts/scatterchart';
import EventGenre from './Components/Charts/EventGenre';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      locationSelected: 'all',
      numberOfEvents: '12', //default value
      showWelcomeScreen: undefined

    }
  }


  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount })
    )
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    console.log(eventCount, location)
    getEvents().then((events) => {
      let locationEvents = location === "all" ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  }
  async componentDidMount() {
    //make sure it is mounted before populating the state
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div title='main' className='App' >
        <Header />
        <Container fluid className='main-app'>
          <Row className='top-box'>
            <Col sm={12}>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
            </Col>
            <Col sm={12}>
              <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
            </Col>
          </Row>
          {!navigator.onLine && <WarningAlert text={'You are offline, so events may not be up to date'} />}
          <div className='data-vis-wrapper'>
            <EventGenre events={this.state.events} locations={this.state.locations} />
            <ResponsiveContainer height={400}>
              <ScatterChartComp data={this.getData()} />
            </ResponsiveContainer>
          </div>
          <EventList events={this.state.events} />
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
        </Container>
      </div>

    );
  }
}

export default App;
