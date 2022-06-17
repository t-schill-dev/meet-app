# Meet App

## Features
### Feature 1: Filter events by city
_As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city._

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities**

-   **Given** the user hasn’t searched for any city
-   **When** the user opens the app
-   **Then** the user should see all upcoming events as a list

**Scenario 2: User should see a list of suggestions when they search for a city**

-   **Given** the main page was open
-   **When** the user starts typing in the city textbox
-   **Then** the user should see a list of cities that match the typed text

**Scenario 3: User can select a city from the suggested list**

-   **Given** the user typed city “Berlin”
-   **When** the user selects the city from the list
-   **Then** the city should change to that city and the user should see a list of upcoming events in that city

### Feature 2: Show/hide event details
_As a user, I would like to be able to show/hide event details so that I can see more/less information about an event._

**Scenario 1: An event element is collapsed by default**
-   **Given** the city page was open
-   **When** the user didn’t select any event
-   **Then** the user should see a collapsed event

**Scenario 2: User can expand an event to see details**
-   **Given** the user found an event
-   **When** the user clicks on the button/link of the specific event
-   **Then** the user should see the expanded details of the event

**Scenario 3: User can collapse an event to hide its details**
-   **Given** the event details are expanded
-   **When** the user closes the details
-   **Then** the user can collapse the elements details

### Feature 3: Specify number of events
_As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once._

**Scenario 1: Default number is 32 when user hasn’t specified**

-   **Given** the user sees a list of events
-   **When** the user hasn’t specified a number of events
-   **Then** the user should see a list 32 events by default

**Scenario 2: User can change the number of events to see**

-   **Given** the user sees a list of events
-   **When** the user specified a number of events he wants to see
-   **Then** the user should see a the specified number of events

### Feature 4: Use the app when offline
_As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online._

**Scenario 1: show cached data when there is no internet connection**

-   **Given** the user is offline
-   **When** the user opens the app
-   **Then** the user should see cached data from the last time being online

**Scenario 2: Show error when user changes the settings**

-   **Given** the user is offline
-   **When** the user changes settings e.g the city
-   **Then** the user should see an error message

### Feature 5: Data visualization
_As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city._

**Scenario : Show a chart showing the upcoming events in each city**

-   **Given** the main page is open
-   **When** the user hasn’t specified a city
-   **Then** the user should see the number of events in each city displayed

