import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from '../features/CartSlice/CartSlice'

export const store = configureStore({
    reducer: {
        cart: CartSliceReducer
    }
})