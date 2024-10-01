import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Category } from '../../../types/product-types';
import Button from '../../../components/button/button';
import locale from '../../../localization/locale';
import placeholder from '../../../assets/images/user-placeholder.png';

const CategoryCard: FC<Category> = ({ name, slug, url }) => {
  const { button } = locale.home;

  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate(`/products?category=${slug}`);
  };

  return (
    <div className='hover:shadow-md max-w-80 flex flex-col items-center justify-center gap-2 p-4 sm:max-w-64'>
      <div className='bg-gray bg-opacity-10 w-80 h-96 flex items-center justify-center sm:w-56 sm:h-64'>
        <img
          src={url || placeholder}
          alt={name}
          className='object-cover w-full h-full'
          loading='lazy'
        />
      </div>

      <span className='text-xl text-light uppercase font-righteous sm:text-lg'>
        {name}
      </span>

      <Button text={button} handleOnClick={navigateToProducts} />
    </div>
  );
};

export default CategoryCard;
