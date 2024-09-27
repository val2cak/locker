import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SlUser as AccountIcon } from 'react-icons/sl';
import {
  AiOutlineLogin as LoginIcon,
  AiOutlineLogout as LogoutIcon,
} from 'react-icons/ai';
import { PiUser as UserIcon } from 'react-icons/pi';

import {
  getUserFromStorage,
  removeUserFromStorage,
} from '../../../services/storage';
import locale from '../../../localization/locale';

const AccountMenu = () => {
  const { myAccount, logout, login } = locale.common;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const userJson: string | null = getUserFromStorage();

  const [isLoggedIn, setIsLoggedIn] = useState(
    userJson !== null ? true : false
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    removeUserFromStorage();
    setIsLoggedIn(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button onClick={toggleDropdown} className='flex items-center'>
        <AccountIcon className='text-lg hover:text-primary' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-dark bg-opacity-95 text-light shadow-md font-righteous text-md capitalize'>
          <ul className='py-2'>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink
                    to='/my-account'
                    className='flex items-center gap-2 px-4 py-2 hover:text-primary'
                  >
                    <UserIcon /> {myAccount}
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className='flex items-center gap-2 px-4 py-2 text-primary'
                  >
                    <LogoutIcon /> :{logout}
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to='/login'
                  className='flex items-center gap-2 px-4 py-2 text-primary'
                >
                  <LoginIcon /> {login}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
