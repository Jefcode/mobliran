import { useShoppingCartContext } from './../context/ShoppingCartContext';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';

import AuthService, {
  LoginUserData,
  RegisterUserData,
} from '../services/AuthService';
import { Address, CartItem, User } from '../../../shared/types';
import { IProfileUpdateForm } from '../screens/Account/AccountDetails';
import { cartActions } from '../features/cart/cartSlice';
import { authActions, authSelector } from '../features/auth/authSlice';

// Global Configurations for ls => localStorage-slim
ls.config.ttl = 10;
ls.config.encrypt = true;
ls.config.decrypt = true;

export default function useAuth() {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const navigate = useNavigate();

  let rememberMe = false;

  const { items: cartItems, setLocalCart } = useShoppingCartContext();

  /**
   * Mutations
   */
  const loginMutations = useMutation(AuthService.loginUser, {
    onSuccess: successHandler,
  });
  const registerMutations = useMutation(AuthService.registerUser, {
    onSuccess: successHandler,
  });

  const userAddressMutations = useMutation(AuthService.updateUserAddress);

  const userProfileMutations = useMutation(AuthService.updateUserProfile);

  function signIn(userData: LoginUserData) {
    loginMutations.mutate(userData);

    // Check if user wants to be remembered
    if (userData.rememberMe) {
      rememberMe = true;
    }
  }

  function signUp(userData: RegisterUserData) {
    registerMutations.mutate(userData);
  }

  // Logout User from context and LocalStorage
  function logout(redirect: string = '/'): void {
    // Context
    dispatch(authActions.logout());

    // LocalStorage
    ls.remove('userData');

    navigate(redirect);
  }

  // Update User Address
  async function updateUserAddress(address: Address) {
    const updatedUser = await userAddressMutations.mutateAsync({
      token: user.token ?? '',
      address,
    });

    console.log(updatedUser);

    loginUser(updatedUser);
  }

  // Update User Profile
  async function updateUserProfile(userData: IProfileUpdateForm) {
    const updatedUser = await userProfileMutations.mutateAsync({
      token: user.token ?? '',
      userData,
    });

    loginUser(updatedUser);
  }

  // updates user cart in db after logging in with the data in localStorage
  async function updateUserCart(
    userCart: CartItem[],
    token: string | undefined
  ) {
    const newCart = mergeTwoCart(cartItems, userCart);

    // Update Redux
    dispatch(cartActions.saveCart(newCart));

    // Save to localStorage
    setLocalCart(newCart);

    // Save To Database;
    await AuthService.updateCart({
      token: token || '',
      cart: newCart,
    });
  }

  // Login and Register On Success Event handler
  function successHandler(userData: User) {
    updateUserCart(userData.cart || [], userData.token);

    // Close Auth modal
    dispatch(authActions.closeModal());

    // Login the User
    dispatch(authActions.login(userData));

    toast.success(`با موفقیت وارد شدید`, {
      className: 'font-both',
    });

    // Save to localStorage
    if (rememberMe) {
      saveUserToLocalStorage(userData);
    }
  }

  // This fn logs the user in and saves its data to localStorage
  function loginUser(user: User) {
    dispatch(authActions.login(user));
    saveUserToLocalStorage(user);
  }

  return {
    loginMutations,
    registerMutations,
    userAddressMutations,
    userProfileMutations,
    signIn,
    signUp,
    logout,
    updateUserAddress,
    updateUserProfile,
  };
}

const saveUserToLocalStorage = (user: User) => {
  ls.set('userData', user, { ttl: 2592000 }); // 30d
};

function mergeTwoCart(array1: CartItem[], array2: CartItem[]): CartItem[] {
  const combinedArray = [...array1, ...array2];

  const newArray: CartItem[] = [];
  combinedArray.forEach((cartItem) => {
    // Check if this cartItem with this id is already in newArray variable
    const newArrayItemIndex = newArray.findIndex(
      (p) => p.product === cartItem.product
    );
    const newArrayItem = newArray[newArrayItemIndex];

    if (newArrayItem) {
      newArray[newArrayItemIndex] = {
        ...cartItem,
        quantity: Math.max(newArrayItem.quantity, cartItem.quantity),
      };
    } else {
      newArray.push(cartItem);
    }
  });

  return newArray;
}
