import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Nav component", () => {
    it("renders Home link", () => {
        render(<App />);
        expect(screen.getByRole("navigation").textContent).toMatch(/home/i);
    });

    it("renders Cart link", () => {
        render(<App />);
        expect(screen.getByRole("navigation").textContent).toMatch(/cart/i);
    });

    it("renders Home component after clicking link", async () => {
        render(<App />);
        const link = screen.getByRole('link', { name: /home/i });

        await userEvent.click(link);

        expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
    });

    it("renders Cart component after clicking link", async () => {
        render(<App />);
        const link = screen.getByRole('link', { name: /cart/i });

        await userEvent.click(link);

        expect(screen.getByRole('heading', { name: /cart/i })).toBeInTheDocument();
    });
});

