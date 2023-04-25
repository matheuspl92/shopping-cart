import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Shop from './Shop';
import products from "../../data/products";

describe('Shop component', () => {

    test('displays the correct shop title', () => {
        render(<Shop />);
        const titleElement = screen.getByRole('heading', { name: 'Shopping page'});

        expect(titleElement).toBeInTheDocument();
    });

    test('displays the correct products', () => {
        render(<Shop />);

        products.map( product => {
            const productTitleElement = screen.getByText(product.cardName);
            expect(productTitleElement).toBeInTheDocument();
        });

    });

});