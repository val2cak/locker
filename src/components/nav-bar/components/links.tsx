import { Fragment } from 'react/jsx-runtime';
import { NavLink } from 'react-router-dom';

import { Routes } from '../../../routes/routes';
import AccountMenu from './account-menu';

const Links = () => {
  return (
    <ul className='flex gap-6 items-center'>
      <li className='relative sm:hidden'>
        <AccountMenu />
      </li>

      {Routes?.find((item) => item.name === 'Dashboard')
        ?.children?.filter(
          (route) =>
            route.icon && route.name !== 'My Account' && route.name !== 'Home'
        )
        .map((route, index) => (
          <Fragment key={index}>
            <li className='text-lg'>
              <NavLink
                to={`/${route.path}`}
                className={({ isActive }) =>
                  isActive ? 'text-primary' : 'text-dark hover:text-primary'
                }
              >
                <route.icon />
              </NavLink>
            </li>
          </Fragment>
        ))}
    </ul>
  );
};

export default Links;
