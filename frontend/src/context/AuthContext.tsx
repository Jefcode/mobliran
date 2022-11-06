import { createContext, ReactNode, useContext, useState } from 'react';
import ls from 'localstorage-slim';

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
  return (ls.get('userData') as User) ?? ({} as User);
}
