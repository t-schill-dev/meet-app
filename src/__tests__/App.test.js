import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../Components/App';


describe('<App/> component', () => {
    test('<EventList> component included', () => {
        render( < App / > );
        const eventList = screen.getByTestId('eventList');
        expect(eventList).toBeInTheDocument();
    });
});