import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/button';
import locale from '../../localization/locale';
import Logo from '../../components/logo/logo';

const NotFoundContainer = () => {
  const { btnText, subtitle, title } = locale.pageNotFound;

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-8 h-full min-h-screen bg-light sm:px-8 lg:px-16 px-40'>
      <div className='flex flex-col gap-2 items-center'>
        <div className='scale-150 pb-4'>
          <Logo size={'w-40'} />
        </div>
        <span className='sm:text-lg text-2xl uppercase font-righteous'>
          {title}
        </span>
        <span className='text-md font-medium'>{subtitle}</span>
      </div>
      <Button
        text={btnText}
        handleOnClick={navigateToHome}
        className='!bg-primary sm:text-md'
      />
    </div>
  );
};

export default NotFoundContainer;
