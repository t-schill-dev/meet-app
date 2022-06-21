import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('if the app is open', () => {
    test('shows all events', () => {
        render( < App / > );
        const eventList = screen.getByTitle('eventList');
        expect(eventList).toHaveLength(1);
    });
})