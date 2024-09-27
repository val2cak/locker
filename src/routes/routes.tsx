import { Outlet } from 'react-router-dom';
import {
  SlBag as BasketIcon,
  SlHeart as WishlistIcon,
  SlUser as AccountIcon,
} from 'react-icons/sl';
import { AiOutlineLogin as LoginIcon } from 'react-icons/ai';

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
    icon: LoginIcon,
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
        path: 'my-account',
        name: 'My Account',
        icon: AccountIcon,
        element: (
          <ProtectedRoute>
            <MyAccountContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        icon: WishlistIcon,
        element: (
          <ProtectedRoute>
            <WishlistContainer />
          </ProtectedRoute>
        ),
      },
      {
        path: 'basket',
        name: 'Basket',
        icon: BasketIcon,
        element: (
          <ProtectedRoute>
            <BasketContainer />
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
