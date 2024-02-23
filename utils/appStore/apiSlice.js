import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MENU_URL } from "../constant";
import { REST_LIST_API } from "../constant"; 

export const restaurantApi = createApi({
    reducerPath: "restaurant",
    baseQuery: fetchBaseQuery({baseUrl: ""}),
    endpoints: (builder) => ({
        getRestaurantById: builder.query({
            query: (resId) => MENU_URL + resId,
        }),
        getRestaurantList: builder.query({
            query: () => REST_LIST_API,
        }),
    }),
})

export const { useGetRestaurantByIdQuery, useGetRestaurantListQuery } = restaurantApi;