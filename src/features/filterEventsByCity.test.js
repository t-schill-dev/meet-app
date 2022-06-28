import { loadFeature, defineFeature } from 'jest-cucumber';

//expect filepath from root of project
const feature = loadFeature('./src/features/fiterEventsByCity.feature');

defineFeature(feature, test => {
    test('WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES', ({ given, when, then }) => {
        given('the user hasn’t searched for any city', () => {

        });

        when('the user opens the app', () => {

        });

        then('the user should see all upcoming events as a list', () => {

        });
    });
    test('USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY', ({ given, when, then }) => {
        given('the main page was open', () => {

        });

        when('the user starts typing in the city textbox', () => {

        });

        then('the user should see a list of cities that match the typed text', () => {

        });
    });
    test('USER CAN SELECT A CITY FROM THE SUGGESTED LIST', ({ given, and, when, then }) => {
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