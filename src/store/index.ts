import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../components/store/cartSlice";

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export default store;
