import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/RestMenuMockData.json";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Restaurant from "../Restaurant";
import Cart from "../Cart";
import { Provider, useDispatch } from "react-redux";
import appStore from "../../../utils/appStore/appStore";
import "@testing-library/jest-dom";
import { clearCart } from "../../../utils/appStore/cartSlice";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("should render the with functionable add btn and cart", () => {
    afterEach(() => {
        act(() => {
            appStore.dispatch(clearCart());
        });
    });
    
    it("should render the R S Mani Cafe menu with accordian (recommended)", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Restaurant />
                </BrowserRouter>
            )
        })
    
        let recommendedAccordian = screen.getByText(/Recommended/);
    
        expect(recommendedAccordian).toBeInTheDocument();
    })
    
    it("should expand the recommended accordian on click", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Restaurant />
                    </Provider>
                </BrowserRouter>
            )
        })
    
        let recommendedAccordian = screen.getByText(/Recommended/);
    
        expect(recommendedAccordian).toBeInTheDocument();
    
        fireEvent.click(recommendedAccordian);
    
        let foodItems = screen.getAllByTestId("foodItems");
    
        expect(foodItems.length).toBe(20);
    })
    
    it("should display no. of cart-items in header on clicking the add btn", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                    </Provider>
                </BrowserRouter>
            )
        })
    
        let cartBeforeAdding = screen.getByText("🛒 0");
    
        expect(cartBeforeAdding).toBeInTheDocument();
    
        let recommendedAccordian = screen.getByText("Recommended (20)");
    
        expect(recommendedAccordian).toBeInTheDocument();
    
        fireEvent.click(recommendedAccordian);
    
        let addBtns = screen.getAllByRole("button", { name: "ADD +" });
    
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
    
        expect(screen.getByText("🛒 2")).toBeInTheDocument();
    
        fireEvent.click(addBtns[2]);
    
        let cartAfterAdding = screen.getByText("🛒 3");
    
        expect(cartAfterAdding).toBeInTheDocument();
    })
    
    it("should reflect the items in the cart", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        })
    
        let cartBeforeAdding = screen.getByText("🛒 0");
    
        let recommendedAccordian = screen.getByText("Recommended (20)");
    
        fireEvent.click(recommendedAccordian);
    
        let addBtns = screen.getAllByRole("button", { name: "ADD +" });
    
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
    
        let foodItems = screen.getAllByTestId("foodItems");
    
        expect(foodItems.length).toBe(22); // (cart-2) & (recommended-20)
    })

    it("should render the cart with functionable clear cart btn", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        })
    
        let cartBeforeAdding = screen.getByText("🛒 0");
    
        let recommendedAccordian = screen.getByText("Recommended (20)");
    
        fireEvent.click(recommendedAccordian);
    
        let addBtns = screen.getAllByRole("button", { name: "ADD +" });
    
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
    
        let foodItems = screen.getAllByTestId("foodItems");
    
        expect(foodItems.length).toBe(22); // (cart-2) & (recommended-20)

        let clearBtn = screen.getByRole("button", {name: "Clear cart"});

        fireEvent.click(clearBtn);

        expect(screen.getAllByTestId("foodItems").length).toBe(20)        
    })
});