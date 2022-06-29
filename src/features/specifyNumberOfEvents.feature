Feature: Specify number of events
  Scenario: DEAULT NUMBER IS 12 WHEN USER HASN’T SPECIFIED
    Given the user sees a list of events
    When the user hasn’t specified a number of events
    Then 12 events should be displayed (unless there are less available)
  Scenario: USER CAN CHANGE THE NUMBER OF EVENTS TO SEE
    Given the user sees a list of events
    When the user specified a number of events he wants to see
    Then the user should see a the specified number of events
