import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
let AppWrapper;

defineFeature(feature, test => {



  test('DEFAULT NUMBER IS 12 WHEN USER HASN’T SPECIFIED', ({ given, when, then }) => {
    given('the user sees a list of events', () => {
      AppWrapper = mount(< App />);
    });

    when('the user hasn’t specified a number of events', () => {

    });

    then('12 events should be displayed (unless there are less available)', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test('USER CAN CHANGE THE NUMBER OF EVENTS TO SEE', ({ given, when, then }) => {
    given('the user sees a list of events', () => {
      AppWrapper = mount(< App />);
    });

    when('the user specified a number of events he wants to see', () => {
      AppWrapper.update();
      AppWrapper.find('.events_number__input').simulate('change', { target: { value: '1' } });
    });

    then('the user should see a the specified number of events', () => {
      // const NumberOfEventsWrapper = mount(<NumberOfEvents />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });
});