import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';
import CategoriesBar from '../components/categories-bar/categories-bar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();

  return (
    <div className='min-h-screen m-0 w-full flex flex-col'>
      <NavBar />
      <CategoriesBar />

      <div
        className={`flex-1 flex flex-col gap-16  ${
          location.pathname === '/' ? '' : 'sm:px-8 lg:px-16 px-40 py-8'
        }`}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
