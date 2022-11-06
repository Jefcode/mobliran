import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

const AuthorizedUserRoutes = () => {
  const { user } = useAuthContext();
  const isLoggedIn = !!user.token;

  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};

export default AuthorizedUserRoutes;
