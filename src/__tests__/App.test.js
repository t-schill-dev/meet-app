import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../Components/Main/App';


describe('<App/> component', () => {
    test('<EventList> component included', () => {
        render(
            <App>   </App>
        );
        const eventList = screen.getByRole('list');
        expect(eventList).toBeInTheDocument();
    });
    test('CitySearch component included', () => {
        render(< App />);
        const citySearch = screen.getByTestId('citySearch');
        expect(citySearch).toBeInTheDocument();
    });
});