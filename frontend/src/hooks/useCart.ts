import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { CartItem } from '../../../shared/types';
import AuthService from '../services/AuthService';
import { useLocalStorage } from './useLocalStorage';
import { cartActions } from '../features/cart/cartSlice';
import { authSelector } from '../features/auth/authSlice';

export default function useCart() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'cartItems',
    []
  );

  const { user } = useSelector(authSelector);

  const addToCartMutation = useMutation(AuthService.addToCart);
  const removeFromCartMutation = useMutation(AuthService.removeFromCart);

  useEffect(() => {
    console.log('redespatch');
    dispatch(cartActions.saveCart(cartItems));
  }, [cartItems, dispatch, user]);

  async function addToCart(cartItem: CartItem, onSuccess?: () => void) {
    // Check if User is logged in
    if (user.token) {
      const updatedUser = await addToCartMutation.mutateAsync({
        token: user.token,
        cartItem,
      });

      if (updatedUser) {
        setCartItems(updatedUser.cart || []);
        onSuccess?.();
      }
    } else {
      // Add To LocalStorage
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find(
          (p) => p.product === cartItem.product
        );

        if (existingItem) {
          return prevCartItems.map((p) =>
            p.product === cartItem.product ? cartItem : p
          );
        } else {
          return [...prevCartItems, cartItem];
        }
      });

      onSuccess?.();
    }
  }

  async function removeFromCart(cartItemId: string, onSuccess?: () => void) {
    // Check if user is logged in
    if (user.token) {
      const updatedUser = await removeFromCartMutation.mutateAsync({
        token: user.token,
        cartItemId,
      });

      if (updatedUser) {
        setCartItems(updatedUser.cart || []);
        onSuccess?.();
      }
    } else {
      // remove from localstorage
      setCartItems((prevCartItems) => {
        return prevCartItems.filter((p) => p.product !== cartItemId);
      });

      onSuccess?.();
    }
  }

  return {
    addToCartMutation,
    removeFromCartMutation,
    addToCart,
    removeFromCart,
  };
}
