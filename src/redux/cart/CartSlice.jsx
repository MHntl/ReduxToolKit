import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [] };
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, actions) => {
      const itemId = actions.payload;
      const İncItem = state.cartItems.find((item) => item.id === itemId);
      İncItem.amount = İncItem.amount + 1;
    },
    decreaseItem: (state, actions) => {
      const itemId = actions.payload;
      const decItem = state.cartItems.find((item) => item.id === itemId);
      if (decItem.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      } else [(decItem.amount -= 1)];
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

//console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
