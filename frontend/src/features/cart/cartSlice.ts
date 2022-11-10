import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../../../shared/types';

const cartInitialStateFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') as string)
  : [];

interface CartInitialState {
  items: CartItem[];
}

const initialState: CartInitialState = {
  items: cartInitialStateFromLocalStorage,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: CartInitialState, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    saveCart(state: CartInitialState, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
