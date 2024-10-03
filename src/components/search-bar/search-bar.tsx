import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

import { Product } from '../../types/product-types';
import { useLazyGetProductsQuery } from '../../hooks/products-api';
import SearchInput from './components/search-input';
import ProductDetailsModal from '../product-details-modal/product-details-modal';
import Loader from '../loader/loader';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [getProducts, { data: resultsData, isLoading }] =
    useLazyGetProductsQuery();
  const resultsRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleModalOpen = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const debouncedGetProducts = useRef(
    debounce(async (query: string) => {
      if (query.length > 2) {
        await getProducts({ userInput: query }).unwrap();
      } else {
        setSearchResults([]);
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
    } else {
      setSearchResults([]);
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
          className='absolute top-full left-0 w-full bg-white shadow-md z-50 mt-1 overflow-y-auto max-h-96'
          ref={resultsRef}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <ul>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleModalOpen(product)}
                  className='flex justify-between p-4 border-b border-light hover:bg-light cursor-pointer'
                >
                  <div>
                    <p className='font-semibold'>{product.title}</p>
                    <p className='text-sm'>
                      {'€'}
                      {product.price.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {selectedProduct && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default SearchBar;
