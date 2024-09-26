import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserFromStorage } from '../services/storage';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const user = getUserFromStorage();
  const tokenExpiry = user
    ? new Date(JSON.parse(user)?.tokenExpiry).getTime()
    : null;
  const isTokenExpired = tokenExpiry && tokenExpiry < Date.now();

  useEffect(() => {
    if (!user || isTokenExpired) {
      navigateTo('/login', { state: { from: location.pathname } });
    }
  }, [user, isTokenExpired, navigateTo, location]);

  if (!user || isTokenExpired) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
