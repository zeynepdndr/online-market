import { useDispatch } from "react-redux";
import { productsSlice } from "./productsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: productsSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
