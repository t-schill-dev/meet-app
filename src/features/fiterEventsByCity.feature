Feature: Filter events by city
  Scenario: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES
    Given the user hasn’t searched for any city
    When the user opens the app
    Then the user should see all upcoming events as a list
  Scenario: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY
    Given the main page was open
    When the user starts typing in the city textbox
    Then the user should see a list of cities that match the typed text
  Scenario: USER CAN SELECT A CITY FROM THE SUGGESTED LIST
    Given the user typed city “Berlin”
    And the list of suggested cities is showing
    When the user selects the city from the list
    Then the city should change to that city and the user should see a list of upcoming events in that city
    And the user should receive a list of upcoming events in that city