import React from "react";
import { act, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ItemCard from "./ItemCard";
import userEvent from '@testing-library/user-event';

describe('ItemCard component', () => {

    const user = userEvent.setup();

    const props = {
        title: 'Test title',
        price: 10.00,
        srcImage: 'test-src-image',
    };

    test('displays correct title', () => {
        render(<ItemCard {...props} />);

        const titleElement = screen.getByText('Test title');

        expect(titleElement).toBeInTheDocument();
    });

    test('displays correct price', () => {
        render(<ItemCard {...props} />);

        const priceElement = screen.getByText(/price:/i);

        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveTextContent('Price: $ 10.00');
    });

    test('displays image correctly', () => {
        render(<ItemCard {...props} />);

        const imageElement = screen.getByRole('img');

        expect(imageElement).toBeInTheDocument();
    });

    test('displays quantity input', () => {
        render(<ItemCard {...props} />);

        const inputElement = screen.getByRole('spinbutton');

        expect(inputElement).toBeInTheDocument();
    });

    test('calls "handleQtdChange" when input changes', async () => {
        render(<ItemCard {...props} />);

        const inputElement = screen.getByRole('spinbutton');

        await act( async () => {
            await user.type(inputElement, '5');
        });

        expect(inputElement.value).toEqual('5');
    });

    test('displays "Add to cart" button', () => {
        render(<ItemCard {...props} />);

        const buttonElement = screen.getByRole('button', { name: 'Add to cart' });

        expect(buttonElement).toBeInTheDocument();
    });

    test('do not call "addToCart" when the button is clicked with a empty quantity input', async () => {
        const addToCart = jest.fn();
        render(<ItemCard {...props } addToCart={addToCart} />);

        const buttonElement = screen.getByRole('button', { name: 'Add to cart' });

        await user.click(buttonElement);

        expect(addToCart).not.toHaveBeenCalled();
    });

    test('call "addToCart" when the button is clicked with 5 in the quantity input', async () => {
        const addToCart = jest.fn();
        render(<ItemCard {...props } addToCart={addToCart} />);

        const inputElement = screen.getByRole('spinbutton');
        const buttonElement = screen.getByRole('button', { name: 'Add to cart' });

        await act( async () => {
            await user.type(inputElement, '5');
        });

        await user.click(buttonElement);

        expect(addToCart).toHaveBeenCalled();
    });

});