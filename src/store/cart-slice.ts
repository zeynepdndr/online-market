import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  itemId: number;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string;
}
export interface CartState {
  items: IProduct[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      if (existingItem) {
        state.totalAmount = -existingItem.price;
        if (existingItem?.quantity === 1)
          state.items = state.items.filter((item) => item.itemId !== id);
        else existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;