import React, { Component } from 'react';

/*Component where User can select a city from the list of suggestions*/
class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: []
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleItemClick = (suggestion) => {
    this.setState({
      query: suggestion
    })
    //triggers function of parent component <App/>
    this.props.updateEvents(suggestion)
  }

  render() {
    return (
      <div className='CitySearch' >
        <input type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <ul className='suggestions'> {
          this.state.suggestions.map((suggestion) => (
            <li key={suggestion}
              onClick={() => this.handleItemClick(suggestion)} >
              {suggestion}</li>
          ))
        } <li onClick={() => this.handleItemClick('all')} >
            <b> See all cities </b>
          </li>

        </ul>
      </div >
    )
  }
}

export default CitySearch;