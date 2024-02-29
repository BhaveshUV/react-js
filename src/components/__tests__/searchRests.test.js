import MOCK_DATA_RESLIST from "../Mocks/ResListMockData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore/appStore";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
// import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// jest.mock("@reduxjs/toolkit/query/react", () => ({
//     ...jest.requireActual("@reduxjs/toolkit/query/react"),
//     fetchBaseQuery: jest.fn(() => {
//         console.log(MOCK_DATA_RESLIST);
//         return Promise.resolve({
//             data: MOCK_DATA_RESLIST,
//             error: undefined,
//             isLoading: false,
//         });
//     }),
// }));

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_RESLIST); //For without redux
        }
    })
})

jest.mock("@reduxjs/toolkit/query/react", () => ({
    ...jest.requireActual("@reduxjs/toolkit/query/react"),
    fetchBaseQuery: jest.fn(() => {
        return async (args, api, extraOptions) => {
            try {
                const response = await fetch("");
                const data = await response.json();
                return data;
            } catch (error) {
                return error;
            }
        };
    }),
}));

describe("Should render Body component with functionable search button", () => {

    it("Should render Body component with an input box & search btn", async () => {
        await act(async () => {
            return render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Body />
                    </BrowserRouter>
                </Provider>
            )
        })

        let searchBtn = screen.getByRole("button", { name: "Search" });

        expect(searchBtn).toBeInTheDocument();

        let searchInput = screen.getByPlaceholderText("Search for restaurant, cuisine or a dish");

        expect(searchInput).toBeInTheDocument();
    })

    it("Should search rest-list for the input -> 'fast food'", async () => {
        await act(async () => {
            return render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Body />
                    </BrowserRouter>
                </Provider>
            )
        })

        let cardsBeforeSearch = screen.getAllByTestId("cards");

        expect(cardsBeforeSearch.length).toBe(9);

        let searchBtn = screen.getByRole("button", { name: "Search" });

        let searchInput = screen.getByPlaceholderText("Search for restaurant, cuisine or a dish");

        fireEvent.change(searchInput, { target: { value: "sweets" } });

        fireEvent.click(searchBtn);

        let cardsAfterSearch = screen.getAllByTestId("cards");

        expect(cardsAfterSearch.length).toBe(4);
    })

    it("Should render with functionable '4+ rating' btn", async () => {
        await act(async () => {
            return render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        })

        let cardsBeforeFilter = screen.getAllByTestId("cards");
        
        expect(cardsBeforeFilter.length).toBe(9);

        let filterRatingBtn = screen.getByRole("button", {name: "4+ Rating"});

        fireEvent.click(filterRatingBtn);

        let cardsAfterFilter = screen.getAllByTestId("cards");
        
        expect(cardsAfterFilter.length).toBe(8);
    })
})