import { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import locale from '../../localization/locale';
import { Routes } from '../../routes/routes';
import { categories } from '../../constants/categories';
import Logo from '../logo/logo';

const Footer = () => {
  const { allRightsReserved } = locale.common;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className='bottom-0 sm:px-8 md:px-12 lg:px-16 px-40 sm:py-16 py-24 w-full flex flex-col gap-16 bg-light text-dark text-base font-medium tracking-wider sm:gap-8'>
      <Logo size={'w-64 sm:w-48'} />

      <div className='flex gap-56 sm:flex-col sm:gap-8 md:gap-36 2xl:gap-96'>
        <ul className='flex flex-col gap-2 justify-center sm:grid sm:grid-cols-2 sm:gap-x-16'>
          {Routes?.find((item) => item.name === 'Dashboard').children?.map(
            (route, index) => (
              <Fragment key={index}>
                <li>
                  <Link
                    to={`/${route.path}`}
                    className='hover:text-primary uppercase font-semibold'
                  >
                    {route.name}
                  </Link>
                </li>
              </Fragment>
            )
          )}
        </ul>

        <ul className='grid grid-cols-2 gap-x-56 gap-y-2 justify-center sm:gap-x-16 md:gap-x-36 2xl:gap-x-96'>
          {categories.map((category, index) => (
            <Fragment key={index}>
              <li>
                <Link
                  to={`/products?category=${category.slug}`}
                  className='hover:text-primary text-opacity-50'
                >
                  {category.name}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>

      <span>{allRightsReserved}</span>
    </div>
  );
};

export default Footer;
