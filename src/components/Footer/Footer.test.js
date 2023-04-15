import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "./Footer";

describe('Footer component', () => {

    test('displays "Subscribe to newsletter" button', () => {
        render(<Footer />);
        const buttonElement = screen.getByRole('button', { name: 'Subscribe to newsletter' });

        expect(buttonElement).toBeInTheDocument();
    });

    test('displays all links', () => {
        render(<Footer />);
        const linkElements = screen.getAllByRole('link');

        linkElements.map( element => {
            expect(element).toBeInTheDocument();
        })
    });

    test('displays copyright text', () => {
        render(<Footer />);
        const textElement = screen.getByText('© 2023 RedTeam Online Store');

        expect(textElement).toBeInTheDocument();
    })
})