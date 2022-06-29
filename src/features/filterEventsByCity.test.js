import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import CitySearch from "../Components/CitySearch/CitySearch";
import { extractLocations } from "../api";

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t searched for any city', () => {

    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see all upcoming events as a list', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    given('the main page was open', () => {

    });

    when('the user starts typing in the city textbox', () => {

    });

    then('the user should see a list of cities that match the typed text', () => {

    });
  });

  test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
    given('the user typed city “Berlin”', () => {

    });

    and('the list of suggested cities is showing', () => {

    });

    when('the user selects the city from the list', () => {

    });

    then('the city should change to that city and the user should see a list of upcoming events in that city', () => {

    });

    and('the user should receive a list of upcoming events in that city', () => {

    });
  });

});
