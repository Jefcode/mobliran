import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { useSelector } from 'react-redux';
import { User, WishListItem } from '../../../shared/types';
import { authSelector } from '../features/auth/authSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';
import AuthService, { IAddToWishlist } from '../services/AuthService';

interface IWishlistContext {
  items: WishListItem[];
  addMutation: UseMutationResult<User, unknown, IAddToWishlist, unknown>;
  addToWishlist: (id: string, onSuccess?: () => void) => void;
}

interface WishlistContextProviderProps {
  children: ReactNode;
}

export const WishlistContext = createContext({} as IWishlistContext);

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export const WishlistContextProvider = ({
  children,
}: WishlistContextProviderProps) => {
  const [items, setItems] = useLocalStorage<WishListItem[]>('wishlist', []);
  const { user } = useSelector(authSelector);

  // Mutations
  const addMutation = useMutation(AuthService.addToWishlist);

  async function addToWishlist(id: string, onSuccess?: () => void) {
    // Check if User is logged in
    if (user.token) {
      const updatedUser = await addMutation.mutateAsync({
        token: user.token,
        id,
      });

      if (updatedUser) {
        setItems(updatedUser.wishlist || []);
        onSuccess?.();
      }
    } else {
      // Add To LocalStorage
      setItems((prevItems) => {
        const existingItem = prevItems.find((p) => p.product === id);

        if (!existingItem) {
          return [...prevItems, { product: id }];
        } else {
          return prevItems;
        }
      });

      onSuccess?.();
    }
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addMutation,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
