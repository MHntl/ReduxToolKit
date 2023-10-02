import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
