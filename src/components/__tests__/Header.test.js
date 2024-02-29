import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../../utils/appStore/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("@reduxjs/toolkit/query/react", () => ({
    ...jest.requireActual("@reduxjs/toolkit/query/react"),
    fetchBaseQuery: jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve([]);
            },
        });
    }),
}));

describe("Should load Header Component with Cart, login button", () => {
    it("Should have cart items", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Querying
        let cart = screen.getByText(/🛒/);

        // Assertion
        expect(cart).toBeInTheDocument();
    });

    it("Should have login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Querying
        let loginBtn = screen.getByRole("button");

        // Assertion
        expect(loginBtn).toBeInTheDocument();
    });
});

describe("Should render cart with 0 items and login btn change to logout on click event", () => {
    it("Should have 0 items in cart", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Querying
        let cart = screen.getByText("🛒 0");

        // Assertion
        expect(cart).toBeInTheDocument();
    });

    it("Should change login button to logout on click event", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Querying
        let loginBtn = screen.getByRole("button", { name: "Login" });

        // Firing Event
        fireEvent.click(loginBtn);

        // Querying
        let logoutBtn = screen.getByRole("button", { name: "Logout" });

        expect(logoutBtn).toBeInTheDocument();
    });
})