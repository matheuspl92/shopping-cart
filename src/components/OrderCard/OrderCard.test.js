import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import OrderCard from "./OrderCard";
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('OrderCard component', () => {
    const orderData = {
        title: 'Test Card',
        price: 25.00,
        orderQtd: 3,
        srcImage: 'test image'
    };

    test('display the correct title', () => {
        render(<OrderCard orderData={orderData} />)
        const titleElement = screen.getByText('Test Card');

        expect(titleElement).toBeInTheDocument();
    });

    test('display the correct price', () => {
        render(<OrderCard orderData={orderData} />)
        const priceElement = screen.getByText('Unit price: $ 25.00');

        expect(priceElement).toBeInTheDocument();
    });

    test('display the correct order quantity', () => {
        render(<OrderCard orderData={orderData} />)
        const orderElement = screen.getByText('Order quantity: 3');

        expect(orderElement).toBeInTheDocument();
    });

    test('display the correct order total', () => {
        render(<OrderCard orderData={orderData} />)
        const orderTotalElement = screen.getByText('Order total: $ 75.00');

        expect(orderTotalElement).toBeInTheDocument();
    });

    test('display the "Remove order" button', () => {
        render(<OrderCard orderData={orderData} />)
        const buttonElement = screen.getByRole('button', { name: 'Remove order' });

        expect(buttonElement).toBeInTheDocument();
    });
    test('calls removeFromCart when the button is clicked', async () => {
        const removeFromCart = jest.fn();
        render(<OrderCard orderData={orderData} removeFromCart={removeFromCart} />)
        const buttonElement = screen.getByRole('button', { name: 'Remove order' });

        await user.click(buttonElement);

        expect(removeFromCart).toBeCalled();
    });
});