import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from './Home'

describe('Home component', () => {

    test('displays title message', () => {
        render(<Home />);
        const titleElement = screen.getByRole('heading', { name: 'Unleash the Red Team power!'});

        expect(titleElement).toBeInTheDocument();
    });

    test('displays all the cards', () => {
        render(<Home />);
        const cardElement1 = screen.getByText('High Performance Rendering');
        const cardElement2 = screen.getByText('AMD Radiance Display™ Engine');
        const cardElement3 = screen.getByText('Get THE LAST OF US™ Part I');

        expect(cardElement1).toBeInTheDocument();
        expect(cardElement2).toBeInTheDocument();
        expect(cardElement3).toBeInTheDocument();
    });

    test('displays card button', () => {
        render(<Home />);
        const buttonElement = screen.getByRole('button', { name: 'LEARN MORE' });

        expect(buttonElement).toBeInTheDocument();
    })
})