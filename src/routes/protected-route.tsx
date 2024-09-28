import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getUserFromStorage, removeUserFromStorage } from '../services/storage';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const storedUser = getUserFromStorage();
  const user = storedUser ? JSON.parse(storedUser) : null;
  const tokenExpiry = user ? new Date(user.tokenExpiry).getTime() : null;
  const isTokenExpired = tokenExpiry && tokenExpiry < Date.now();

  useEffect(() => {
    if (!user || isTokenExpired) {
      removeUserFromStorage();
      navigateTo('/login', { state: { from: location.pathname } });
    }
  }, [user, isTokenExpired, navigateTo, location]);

  if (!user || isTokenExpired) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
