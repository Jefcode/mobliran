import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';

import { useAuthContext } from '../context/AuthContext';
import AuthService, {
  LoginUserData,
  RegisterUserData,
} from '../services/AuthService';
import { Address, User } from '../../../shared/types';
import { IProfileUpdateForm } from '../screens/Account/AccountDetails';

// Global Configurations for ls => localStorage-slim
ls.config.ttl = 10;
ls.config.encrypt = true;
ls.config.decrypt = true;

export default function useAuth() {
  const navigate = useNavigate();
  const { closeModal, login, logout: logoutUser, user } = useAuthContext();
  let rememberMe = false;

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
    logoutUser();

    // LocalStorage
    ls.remove('userData');

    navigate(redirect);
  }

  // Gets user data from localStorage if exits
  function getUser() {
    return (ls.get('userData') as User) ?? ({} as User);
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

  // Login and Register On Success Event handler
  function successHandler(userData: User) {
    // Close Auth modal
    closeModal();

    // Login the User
    login(userData);

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
    login(user);
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
    getUser,
    updateUserAddress,
    updateUserProfile,
  };
}

const saveUserToLocalStorage = (user: User) => {
  ls.set('userData', user, { ttl: 2592000 }); // 30d
};
