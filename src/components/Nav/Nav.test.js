import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../../App';
import Nav from './Nav';

describe("Nav component", () => {

    const user = userEvent.setup();
    
    test('displays store name', () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const storeNameElement = screen.getByRole('heading', { name: 'Red Team'});

        expect(storeNameElement).toBeInTheDocument();
    });

    test('displays Home link', () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const homeLinkElement = screen.getByRole('link', { name: 'Home'});

        expect(homeLinkElement).toBeInTheDocument();
    });

    test('displays Home when the Home link is clicked', async () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const homeLinkElement = screen.getByRole('link', { name: 'Home'});
        const shopLinkElement = screen.getByRole('link', { name: 'Shop'});

        await user.click(shopLinkElement);
        await user.click(homeLinkElement);

        const homeTitleElement = screen.getByRole('heading', { name: "Unleash the Red Team power!"});

        expect(homeTitleElement).toBeInTheDocument();
    });

    test('displays Shop link', () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const shopLinkElement = screen.getByRole('link', { name: 'Shop'});

        expect(shopLinkElement).toBeInTheDocument();
    });

    test('displays Shop when the Shop link is clicked', async () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const shopLinkElement = screen.getByRole('link', { name: 'Shop'});

        await user.click(shopLinkElement);

        const shopTitleElement = screen.getByRole('heading', { name: 'Shopping page' });

        expect(shopTitleElement).toBeInTheDocument();
    });

    test('displays Cart link', () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const cartLinkElement = screen.getByRole('link', { name: 'Cart'});

        expect(cartLinkElement).toBeInTheDocument();
    });

    test('displays Cart when the Cart link is clicked', async () => {
        render(<Nav />, { wrapper: (children) => {
            return (
                <App>
                    {children};
                </App>
            )
        }});

        const cartLinkElement = screen.getByRole('link', { name: 'Cart'});

        await user.click(cartLinkElement);

        const cartTitleElement = screen.getByRole('heading', { name: 'Your cart' });

        expect(cartTitleElement).toBeInTheDocument();
    });
});

