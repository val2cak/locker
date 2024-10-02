import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HiOutlinePlus as PlusIcon,
  HiOutlineMinus as MinusIcon,
} from 'react-icons/hi2';

import { categories } from '../../constants/categories';

const CategoriesBar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get('category');

  const toggleDropdown = (categorySlug: string) => {
    setOpenCategory(openCategory === categorySlug ? null : categorySlug);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className='w-full bg-dark text-light py-4 sm:px-8 md:px-8 lg:px-16 px-40 text-base font-righteous z-30'
    >
      <div className='mx-auto'>
        <ul className='flex justify-between items-center gap-8 sm:w-full sm:flex-col sm:items-start sm:gap-3 md:w-full md:flex-col md:items-start md:gap-3'>
          {categories.map((category) => (
            <li
              key={category.slug}
              className='relative sm:w-full sm:text-md md:w-full md:text-md 2xl:text-md'
            >
              <button
                className='hover:text-primary uppercase sm:w-full sm:flex sm:justify-between md:w-full md:flex md:justify-between'
                onClick={() => toggleDropdown(category.slug)}
              >
                {category.name}
                <span className='hidden sm:flex sm:items-center md:flex md:items-center'>
                  {openCategory === category.slug ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </span>
              </button>
              {openCategory === category.slug && (
                <div className='absolute left-0 mt-2 w-56 bg-dark text-light shadow-md sm:static sm:w-full sm:shadow-none sm:mt-0 md:static md:w-full md:shadow-none md:mt-0'>
                  <ul className='py-2 sm:py-0 md:py-0'>
                    {category.children.map((child) => (
                      <li key={child.slug}>
                        <Link
                          to={`/products?category=${child.slug}`}
                          className={`block px-4 py-2 capitalize ${
                            categoryFromQuery === child.slug
                              ? 'text-primary'
                              : 'hover:text-primary'
                          }`}
                          onClick={() => setOpenCategory(null)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesBar;
