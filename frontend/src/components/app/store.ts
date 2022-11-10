import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice';
import cartReducer from '../../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
