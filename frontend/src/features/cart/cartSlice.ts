import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../../../shared/types';

interface CartInitialState {
  items: CartItem[];
}

const initialState: CartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: CartInitialState, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
