import { createContext, ReactNode, useContext, useState } from 'react';
import ls from 'localstorage-slim';

import { User } from '../../../shared/types';
import useAuth from '../hooks/useAuth';

interface IAuthContenxt {
  modalOpen: boolean;
  user: User;
  openModal: () => void;
  closeModal: () => void;
  login: (userData: User) => void;
  logout: () => void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContenxt);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const { getUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState<User>(getUser);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const login = (userData: User) => {
    setUserData(userData);
  };

  const logout = () => {
    setUserData({} as User);
  };

  return (
    <AuthContext.Provider
      value={{
        modalOpen,
        user: userData,
        openModal,
        closeModal,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
