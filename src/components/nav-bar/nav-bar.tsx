import { useState } from 'react';
import { FiMenu as MenuIcon } from 'react-icons/fi';

import Links from './components/links';
import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';
import MobileMenu from './components/mobile-menu';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='flex items-center justify-between sm:px-8 md:px-12 lg:px-16 px-40 py-4 gap-36 sm:gap-4'>
      <div className='flex items-center sm:gap-4 md:gap-8'>
        <button
          className='hidden sm:flex md:flex sm:text-lg md:text-lg'
          onClick={toggleMobileMenu}
          aria-label='Toggle Menu'
        >
          <MenuIcon />
        </button>
        <Logo size={'w-64 sm:w-36 md:w-40 lg:w-56 2xl:w-72'} />
      </div>

      <span className='flex w-full sm:hidden md:hidden'>
        <SearchBar />
      </span>

      <div className='flex items-center gap-6'>
        <Links />
      </div>

      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      )}
    </nav>
  );
};

export default NavBar;
