import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('if the app is open', () => {
    test('<EventList component included>', () => {
        render( < App / > );
        const eventList = screen.getByTestId('eventList');
        expect(eventList).toBeInTheDocument();
    });
})