import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { CartItem } from '../../../shared/types';
import { useAuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
import { useLocalStorage } from './useLocalStorage';
import { cartActions } from '../features/cart/cartSlice';

export default function useCart() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'cartItems',
    []
  );
  console.log(cartItems);
  const { user } = useAuthContext();

  const addToCartMutation = useMutation(AuthService.addToCart);

  useEffect(() => {
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

  return { addToCartMutation, addToCart };
}
