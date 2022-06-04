import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../../features/auth/authSlice.js";
import cart from "../redux/reducers/cart.js";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    cart: cart,
  },
});
