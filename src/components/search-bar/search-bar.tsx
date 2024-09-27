import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

import { Product } from '../../types/product-types';
import { useLazyGetProductsQuery } from '../../hooks/products-api';
import SearchInput from './components/search-input';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [getProducts, { data: resultsData, isLoading }] =
    useLazyGetProductsQuery();
  const resultsRef = useRef<HTMLDivElement>(null);

  const debouncedGetProducts = useRef(
    debounce(async (query: string) => {
      if (query.length > 2) {
        await getProducts(query).unwrap();
      }
    }, 300)
  ).current;

  useEffect(() => {
    debouncedGetProducts(searchQuery);
    return () => {
      debouncedGetProducts.cancel();
    };
  }, [searchQuery, debouncedGetProducts]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (resultsData && resultsData.total >= 1) {
      setSearchResults(resultsData.products);
    }
  }, [resultsData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full'>
      <SearchInput onSearch={handleSearch} />
      {searchQuery && searchResults.length > 0 && (
        <div
          className='absolute top-full left-0 w-full bg-white shadow-lg z-50 mt-1 overflow-y-auto max-h-96'
          ref={resultsRef}
        >
          {isLoading ? (
            <div className='p-4 text-center'>Loading...</div>
          ) : (
            <ul>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className='flex justify-between p-4 border-b border-light hover:bg-light cursor-pointer'
                >
                  <div>
                    <p className='font-semibold'>{product.title}</p>
                    <p className='text-sm'>€{product.price.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
