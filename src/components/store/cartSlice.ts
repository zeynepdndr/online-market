import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  items: [],
  totalQuantity: 0,
  loading: false,
  error: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalQuantity++;
    },
  },
});

export const cartActions = cartSlice.actions;
