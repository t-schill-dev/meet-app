import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import CitySearch from "../Components/CitySearch/CitySearch";
import { extractLocations } from "../api";

let locations = extractLocations(mockData);

const feature = loadFeature("./src/features/fiterEventsByCity.feature");

defineFeature(feature, (test) => {
  test('WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t searched for any city', () => {

    });

    when('the user opens the app', () => {
      AppWrapper = mount(< App events={mockData}
      />);
    });

    then('the user should see all upcoming events as a list', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event').hostNodes()).toHaveLength(mockData.length);
    });
  });

  test('USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY', ({ given, when, then }) => {
    let CitySearchWrapper;
    given('the main page was open', () => {
      CitySearchWrapper = shallow(< CitySearch updateEvents={
        () => { }}
        locations={locations}
      />)
    });

    when('the user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    then('the user should see a list of cities that match the typed text', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });
  //Async funtion to allow App component to load before chosing an option
  test('USER CAN SELECT A CITY FROM THE SUGGESTED LIST', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user typed city “Berlin”', async () => {
      AppWrapper = await mount(< App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } })
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('the user selects the city from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('the city should change to that city and the user should see a list of upcoming events in that city', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });

    and('the user should receive a list of upcoming events in that city', () => {
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
    });
  });

});
