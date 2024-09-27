import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import { categories } from '../../constants/categories';

const CategoriesBar = () => {
  return (
    <div className='w-full bg-dark text-light py-4 sm:px-8 lg:px-16 px-40 uppercase text-base font-righteous'>
      <div className='container mx-auto'>
        <ul className='flex justify-between items-center gap-8'>
          {categories.map((category, index) => (
            <Fragment key={index}>
              <li className='tracking-wider'>
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
    </div>
  );
};

export default CategoriesBar;
