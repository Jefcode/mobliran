import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { useAuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';
import AuthService, {
  LoginUserData,
  RegisterUserData,
} from '../services/AuthService';

export default function useAuth() {
  const { closeModal } = useAuthContext();
  const [token, setToken] = useLocalStorage<string | null>('token', null);

  const loginMutations = useMutation(AuthService.loginUser);

  const registerMutations = useMutation(AuthService.registerUser, {
    onSuccess: (data) => {
      // Close Auth modal
      closeModal();

      // Save to localStoarge
      setToken(data.token as string);

      toast.success(`سلام ${data.username} خوش آمدی`, {
        className: 'font-both',
      });
    },
  });

  function signIn(userData: LoginUserData) {
    loginMutations.mutate(userData);
  }

  function signUp(userData: RegisterUserData) {
    registerMutations.mutate(userData);
  }

  function getUserData() {}

  return {
    loginMutations,
    registerMutations,
    token,
    signIn,
    signUp,
  };
}
