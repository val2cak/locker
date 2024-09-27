import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import locale from '../../localization/locale';
import { Routes } from '../../routes/Routes';
import logo from '../../assets/images/logo.png';
import { categories } from '../../constants/categories';

const Footer = () => {
  const { allRightsReserved } = locale.common;

  return (
    <div className='bottom-0 sm:px-8 lg:px-16 px-40 sm:py-12 py-24 w-full flex flex-col gap-16 bg-light text-dark text-base font-medium tracking-wider'>
      <img src={logo} className='w-56' />

      <div className='flex gap-56'>
        <ul className='flex flex-col gap-2 justify-center'>
          {Routes?.find((item) => item.name === 'Dashboard').children?.map(
            (route, index) => (
              <Fragment key={index}>
                <li>
                  <Link to={route.path} className='hover:text-primary'>
                    {route.name}
                  </Link>
                </li>
              </Fragment>
            )
          )}
        </ul>

        <ul className='grid grid-cols-2 gap-x-56 gap-y-2 justify-center'>
          {categories.map((category, index) => (
            <Fragment key={index}>
              <li>
                <Link
                  to={`/products?category=${category.slug}`}
                  className='hover:text-primary'
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
