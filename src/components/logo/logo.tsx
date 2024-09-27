import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { FC } from 'react';

interface Props {
  size: string;
}

const Logo: FC<Props> = ({ size }) => {
  return (
    <NavLink to={'/'}>
      <img src={logo} className={size} />
    </NavLink>
  );
};

export default Logo;
