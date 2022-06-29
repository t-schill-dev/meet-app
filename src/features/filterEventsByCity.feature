Feature: Filter events by city.

  Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
    Given the user hasn’t searched for any city
    When the user opens the app
    Then the user should see all upcoming events as a list
  Scenario: User should see a list of suggestions when they search for a city.
    Given the main page was open
    When the user starts typing in the city textbox
    Then the user should see a list of cities that match the typed text
  Scenario: User can select a city from the suggested list.
    Given the user typed city “Berlin”
    And the list of suggested cities is showing
    When the user selects the city from the list
    Then the city should change to that city and the user should see a list of upcoming events in that city
    And the user should receive a list of upcoming events in that city