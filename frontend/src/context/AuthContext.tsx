import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../../../shared/types';

interface IAuthContenxt {
  modalOpen: boolean;
  user: User;
  openModal: () => void;
  closeModal: () => void;
  login: (userData: User) => void;
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
  const [userData, setUserData] = useState<User>(getUserFromLocalStorage);
  console.log(userData);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const login = (userData: User) => {
    setUserData(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        modalOpen,
        user: userData,
        openModal,
        closeModal,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function getUserFromLocalStorage() {
  const initialValue = localStorage.getItem('userData');

  if (initialValue) {
    return JSON.parse(initialValue);
  }

  return {} as User;
}
