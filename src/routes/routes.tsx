import { Outlet } from 'react-router-dom';

import { CustomRouteObject } from '../types/general-types';
import HomeContainer from '../features/home/home-container';
import ProductsContainer from '../features/products/products-container';
import BasketContainer from '../features/basket/basket-container';
import WishlistContainer from '../features/wishlist/wishlist-container';
import MyAccountContainer from '../features/my-account/my-account-container';
import LoginContainer from '../features/login/login-container';
import NotFoundContainer from '../features/not-found/not-found-container';
import ProtectedRoute from './protected-route';

export const Routes: CustomRouteObject[] = [
  {
    path: '/login',
    name: 'Login',
    element: <LoginContainer />,
  },
  {
    path: '/',
    name: 'Dashboard',
    element: <Outlet />,
    children: [
      {
        path: '',
        name: 'Home',
        element: <HomeContainer />,
      },
      {
        path: 'products',
        name: 'Products',
        element: <ProductsContainer />,
      },
      {
        path: 'basket',
        name: 'Basket',
        element: (
          <ProtectedRoute>
            <BasketContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        element: (
          <ProtectedRoute>
            <WishlistContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-account',
        name: 'My Account',
        element: (
          <ProtectedRoute>
            <MyAccountContainer />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    name: 'Page Not Found',
    element: <NotFoundContainer />,
  },
];
