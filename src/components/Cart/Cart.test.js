import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

const user = userEvent.setup();

describe('Cart component', () => {
    const cart = [
        {
            id: 1,
            title: 'Item 1',
            price: 10.00,
            orderQtd: 2
        },
        {
            id: 2,
            title: 'Item 2',
            price: 30.00,
            orderQtd: 3
        },
    ];

    test('displays the title "Your cart"', () => {
        render(<Cart cart={[]} />);
        const titleElement = screen.getByRole('heading', {
            name: 'Your cart',
        });
        expect(titleElement).toBeInTheDocument();
    });

    test('displays a message when the cart is empty', () => {
        render(<Cart cart={[]} />);
        const messageElement = screen.getByRole('heading', {
            name: 'Things are pretty empty around here...',
        });
        expect(messageElement).toBeInTheDocument();
    });

    test('renders the cart items', () => {
        render(<Cart cart={cart} />);
        const item1Element = screen.getByText('Item 1');
        const item2Element = screen.getByText('Item 2');

        expect(item1Element).toBeInTheDocument();
        expect(item2Element).toBeInTheDocument();
    });

    test('removes an item from the cart when the "Remove" button is clicked', async () => {
        const removeFromCart = jest.fn();
        render(<Cart cart={cart} removeFromCart={removeFromCart} />);
        const removeButtonElement = screen.getAllByRole('button', { name: 'Remove order' })[0];

        await user.click(removeButtonElement);

        expect(removeFromCart).toHaveBeenCalled();
    });

    test('displays the correct purchase total', () => {
        render(<Cart cart={cart} />);
        const purchaseTotalElement = screen.getByRole('heading', { level: 3 });

        expect(purchaseTotalElement).toHaveTextContent('Purchase total: $ 110.00');
    });

    test('does not display the purchase total or checkout button when the cart is empty', () => {
        render(<Cart cart={[]} />);
        const purchaseTotalElement = screen.queryByText(/purchase total/i);
        const checkoutButtonElement = screen.queryByRole('button', { name: 'Checkout' });

        expect(purchaseTotalElement).toBeNull();
        expect(checkoutButtonElement).toBeNull();
    })
});