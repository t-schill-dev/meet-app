import { loadFeature, defineFeature } from 'jest-cucumber'
import React from "react";
import { mount } from "enzyme";
import { render, screen, fireEvent } from '@testing-library/react';
import App from "../App";
import Event from '../Components/Event/Event';
import EventList from '../Components/EventList/EventList'
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showAndHideDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;

  test('AN EVENT ELEMENT IS COLLAPSED BY DEFAULT', ({ given, when, then }) => {
    given('the city page was open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user didn’t select any event', () => {
      AppWrapper.update();
    });

    then('the user should see a collapsed event', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  });

  test('USER CAN EXPAND AN EVENT TO SEE DETAILS', ({ given, when, then }) => {
    given('the user found an event', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks on the button/link of the specific event', () => {
      AppWrapper.update();
      AppWrapper.find('.details-button').simulate('click');
    });

    then('the user should see the expanded details of the event', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });
  });
  //Using RTL for async
  test('USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS', ({ given, when, then }) => {
    given('the event details are expanded', async () => {
      render(<App events={mockData}>
        <EventList >
          <Event />
        </EventList>
      </App >
      );
      screen.getByRole('button')
    });

    when('the user closes the details', () => {
      fireEvent.click(screen.getByText('Hide details'));
    });

    then('the user can collapse the elements details', () => {
      expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });


})