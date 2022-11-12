import { UseMutationResult } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { CartItem, User } from '../../../shared/types';
import useCart from '../hooks/useCart';
import {
  IAddToCart,
  IRemoveFromCart,
  IUpdateCart,
} from '../services/AuthService';

interface IShoppingCartContext {
  items: CartItem[];
  addMutation: UseMutationResult<User, unknown, IAddToCart, unknown>;
  removeMutation: UseMutationResult<User, unknown, IRemoveFromCart, unknown>;
  updateMutation: UseMutationResult<User, unknown, IUpdateCart, unknown>;
  addToCart: (item: CartItem, onSuccess?: () => void) => void;
  removeFromCart: (id: string, onSuccess?: () => void) => void;
  updateCart: (newCart: CartItem[], onSuccess?: () => void) => void;
  setLocalCart: (newCart: CartItem[]) => void;
}

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const {
    items,
    addToCartMutation,
    removeFromCartMutation,
    updateCartMutation,
    updateCart: cUpdateCart,
    addToCart: cAddToCart,
    removeFromCart: cRemoveFromCart,
    setCartItems,
  } = useCart();

  const addToCart = (item: CartItem, onSuccess?: () => void) => {
    cAddToCart(item, onSuccess);
  };

  const removeFromCart = (id: string, onSuccess?: () => void) => {
    cRemoveFromCart(id, onSuccess);
  };

  const updateCart = (newCart: CartItem[], onSuccess?: () => void) => {
    cUpdateCart(newCart, onSuccess);
  };

  const setLocalCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateCart,
        addMutation: addToCartMutation,
        removeMutation: removeFromCartMutation,
        updateMutation: updateCartMutation,
        setLocalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
