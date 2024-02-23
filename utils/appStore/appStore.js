import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { restaurantApi } from "./apiSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware),
})

export default appStore;