import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { getUserFromStorage, removeUserFromStorage } from '../services/storage';
import locale from '../localization/locale';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const storedUser = getUserFromStorage();
  const user = storedUser ? JSON.parse(storedUser) : null;
  const tokenExpiry = user ? new Date(user.tokenExpiry).getTime() : null;
  const isTokenExpired = tokenExpiry && tokenExpiry < Date.now();

  const { sessionExpired, youNeedToBeLoggedIn } = locale.login;

  useEffect(() => {
    if (!user || isTokenExpired) {
      removeUserFromStorage();

      if (!user) {
        toast.error(youNeedToBeLoggedIn);
      } else if (isTokenExpired) {
        toast.error(sessionExpired);
      }

      navigateTo('/login', { state: { from: location.pathname } });
    }
  }, [user, isTokenExpired, navigateTo, location]);

  if (!user || isTokenExpired) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
