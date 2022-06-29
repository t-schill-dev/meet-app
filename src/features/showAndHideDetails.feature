Feature: Show and hide details
  Scenario: 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
    Given the city page was open
    When the user didn’t select any event
    Then the user should see a collapsed event
  Scenario: 2: USER CAN EXPAND AN EVENT TO SEE DETAILS
    Given the user found an event
    When the user clicks on the button/link of the specific event
    Then the user should see the expanded details of the event
  Scenario: 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
    Given the event details are expanded
    When the user closes the details
    Then the user can collapse the elements details
