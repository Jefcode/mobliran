import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import ls from 'localstorage-slim';

import { useAuthContext } from '../context/AuthContext';
import AuthService, {
  LoginUserData,
  RegisterUserData,
} from '../services/AuthService';
import { User } from '../../../shared/types';

// Global Configurations for ls => localStorage-slim
ls.config.ttl = 10;
ls.config.encrypt = true;
ls.config.decrypt = true;

export default function useAuth() {
  const { closeModal, login } = useAuthContext();
  let rememberMe = false;

  const loginMutations = useMutation(AuthService.loginUser, {
    onSuccess: successHandler,
  });
  const registerMutations = useMutation(AuthService.registerUser, {
    onSuccess: successHandler,
  });

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
      ls.set('userData', userData);
    }
  }

  return {
    loginMutations,
    registerMutations,
    signIn,
    signUp,
  };
}
