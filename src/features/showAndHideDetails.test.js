import { loadFeature, defineFeature } from 'jest-cucumber'
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showAndHideDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;

  test('AN EVENT ELEMENT IS COLLAPSED BY DEFAULT', ({ given, when, then }) => {
    given('the city page was open', () => {
      AppWrapper = mount(< App />);
    });

    when('the user didn’t select any event', () => {
      AppWrapper.update();
    });

    then('the user should see a collapsed event', () => {
      expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });

  test('USER CAN EXPAND AN EVENT TO SEE DETAILS', ({ given, when, then }) => {
    given('the user found an event', async () => {
      AppWrapper = await mount(< App />);
      expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
    });

    when('the user clicks on the button/link of the specific event', () => {
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click')

    });

    then('the user should see the expanded details of the event', () => {
      expect(AppWrapper.find('.eventDescription')).toHaveLength(1);
    });
  });

  test('USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS', ({ given, when, then }) => {
    given('the event details are expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update()
      AppWrapper.find('.details-button').at(0).simulate('click');
      expect(AppWrapper.find('.eventDescription')).toHaveLength(1);
    });

    when('the user closes the details', () => {
      AppWrapper.find('.details-button').at(0).simulate('click');
    });

    then('the user can collapse the elements details', () => {
      expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });


})
