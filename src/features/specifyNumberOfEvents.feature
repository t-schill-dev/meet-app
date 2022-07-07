Feature: Specify number of events
  Scenario: DEFAULT NUMBER IS 12 WHEN USER HASN’T SPECIFIED
    Given the user sees a list of events
    When the user hasn’t specified a number of events
    Then the user should see a list 12 events by default
  Scenario: USER CAN CHANGE THE NUMBER OF EVENTS TO SEE
    Given the user sees a list of events
    When the user specified a number of events he wants to see
    Then the user should see a the specified number of events
