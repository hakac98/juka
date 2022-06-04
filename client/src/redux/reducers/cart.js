import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartSet: (state, action) => {
      state.cart = action.payload.cart;
    },
  },
});

export const { cartSet } = cartSlice.actions;
export default cartSlice.reducer;
