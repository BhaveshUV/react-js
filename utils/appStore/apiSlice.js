import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantApi = createApi({
    reducerPath: "restaurant",
    baseQuery: fetchBaseQuery({baseUrl: "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2F"}),
    endpoints: (builder) => ({
        getRestaurantById: builder.query({
            query: (resId) => "menu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D19.1582215%26lng%3D72.9597433%26restaurantId%3D" + resId,
        }),
        getRestaurantList: builder.query({
            query: () => "restaurants%2Flist%2Fv5%3Flat%3D19.07480%26lng%3D72.88560%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING",
        }),
    }),
})

export const { useGetRestaurantByIdQuery, useGetRestaurantListQuery } = restaurantApi;