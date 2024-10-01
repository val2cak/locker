import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu as MenuIcon } from 'react-icons/fi';
import {
  AiOutlineLogin as LoginIcon,
  AiOutlineLogout as LogoutIcon,
} from 'react-icons/ai';
import { PiUser as UserIcon } from 'react-icons/pi';
import toast from 'react-hot-toast';
import { Fragment } from 'react/jsx-runtime';

import CategoriesBar from '../../categories-bar/categories-bar';
import { Routes } from '../../../routes/routes';
import {
  getUserFromStorage,
  removeUserFromStorage,
} from '../../../services/storage';
import locale from '../../../localization/locale';

const MobileMenu = ({ onClose }) => {
  const { myAccount, logout, login, signOutSuccessful } = locale.common;

  const userJson: string | null = getUserFromStorage();

  const [isLoggedIn, setIsLoggedIn] = useState(
    userJson !== null ? true : false
  );

  const handleSignOut = () => {
    removeUserFromStorage();
    setIsLoggedIn(false);
    toast.success(signOutSuccessful);
  };

  return (
    <div className='fixed inset-0 z-50 flex'>
      <div className='fixed inset-0 bg-dark opacity-50' onClick={onClose}></div>

      <div className='relative bg-dark text-light w-3/4 h-full shadow-lg overflow-y-auto transition-transform transform flex flex-col gap-8'>
        <button
          className='absolute top-6 left-8 text-lg'
          onClick={onClose}
          aria-label='Close Menu'
        >
          <MenuIcon className='flex rotate-90' />
        </button>

        <div className='pt-16'>
          <ul className='text-light px-8 pb-4 flex flex-col gap-3 border-b-4 border-gray border-opacity-10'>
            {Routes?.find((item) => item.name === 'Dashboard')
              ?.children?.filter(
                (route) => route.icon && route.name !== 'My Account'
              )
              .map((route, index) => (
                <Fragment key={index}>
                  <NavLink
                    to={`/${route.path}`}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primary flex items-center gap-4 uppercase font-righteous text-md'
                        : 'text-light flex items-center gap-4 uppercase font-righteous text-md'
                    }
                  >
                    <route.icon /> {route.name}
                  </NavLink>
                </Fragment>
              ))}

            {isLoggedIn ? (
              <>
                <li>
                  <NavLink
                    to='/my-account'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primary flex items-center gap-4 uppercase font-righteous text-md'
                        : 'text-light flex items-center gap-4 uppercase font-righteous text-md'
                    }
                  >
                    <UserIcon /> {myAccount}
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className='flex items-center gap-4 text-primary uppercase font-righteous text-md'
                  >
                    <LogoutIcon /> {logout}
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to='/login'
                  className='flex items-center gap-2 text-primary uppercase font-righteous text-md'
                >
                  <LoginIcon /> {login}
                </NavLink>
              </li>
            )}
          </ul>

          <CategoriesBar />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
