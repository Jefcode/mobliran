import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../features/auth/authSlice';

const UnauthorizedUserRoutes = () => {
  const { user } = useSelector(authSelector);
  const isLoggedIn = !!user.token;

  if (isLoggedIn) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default UnauthorizedUserRoutes;
