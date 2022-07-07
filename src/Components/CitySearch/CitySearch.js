import React, { Component } from 'react';
import { InfoAlert } from '../Alert';

/*Component where User can select a city from the list of suggestions*/
class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      })
    };
  }

  handleItemClick = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    })
    //triggers function of parent component <App/>
    this.props.updateEvents(suggestion)
  }

  render() {
    return (
      <div className='CitySearch'>
        <InfoAlert text={this.state.infoText} />
        <input type='text'
          className='city'
          value={this.state.query}
          placeholder={'Place of interest'}
          onChange={this.handleInputChange}
          onFocus={
            () => { this.setState({ showSuggestions: true }) }} />
        <ul className='suggestions' style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}
              onClick={
                () => this.handleItemClick(suggestion)}> {suggestion} </li>
          ))}
          <li onClick={
            () => this.handleItemClick('all')} >
            <b> See all cities </b>
          </li>
          <li id='collapse_button' onClick={
            () => this.setState({ showSuggestions: false })}> <b >Close</b> </li>



        </ul>

      </div >
    )
  }
}

export default CitySearch;