import { FC, ReactNode } from 'react';

import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';
import CategoriesBar from '../components/categories-bar/categories-bar';
import SearchBar from '../components/search-bar/search-bar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen m-0 w-full flex flex-col'>
      <NavBar />

      <div className='flex sm:hidden md:hidden'>
        <CategoriesBar />
      </div>

      <div className='hidden sm:flex sm:bg-dark sm:px-8 sm:py-4'>
        <SearchBar />
      </div>

      <div className='flex-1 flex flex-col gap-16 sm:gap-8 md:gap-8'>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
