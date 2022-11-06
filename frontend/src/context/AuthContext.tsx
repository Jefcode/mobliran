import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../../../shared/types';

interface IAuthContenxt {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  login: (userData: User) => void;
  register: (userData: User) => void;
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
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const login = (userData: User) => {};
  const register = (userData: User) => {};

  return (
    <AuthContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
