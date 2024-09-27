import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import Links from './components/links';
import logo from '../../assets/images/logo.png';
import SearchInput from './components/search-input';
import { useLazyGetProductsQuery } from '../../hooks/products-api';

const NavBar = () => {
  const [userInput, setUserInput] = useState<string>('');

  const [
    getProducts,
    { data: productsData, isFetching: isProductsDataFetching },
  ] = useLazyGetProductsQuery();

  const debouncedGetProducts = debounce(getProducts, 300);

  useEffect(() => {
    debouncedGetProducts(userInput);
    return () => debouncedGetProducts.cancel();
  }, [userInput]);

  const handleSearch = (query: string) => {
    setUserInput(query);
  };

  return (
    <div className='flex items-center justify-between sm:px-8 lg:px-16 px-40 py-4 gap-36'>
      <img src={logo} className='w-36' />
      <SearchInput onSearch={handleSearch} />
      <Links />
    </div>
  );
};

export default NavBar;
