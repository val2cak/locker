import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Product } from '../../types/product-types';
import ProductDetailsModal from '../product-details-modal/product-details-modal';
import locale from '../../localization/locale';
import { truncateText } from '../../utils/truncate-text';
import placeholder from '../../assets/images/product-placeholder.png';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { details } = locale.common;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = placeholder;
  };

  const location = useLocation();

  return (
    <div className='bg-white hover:shadow-md max-w-64 sm:max-w-full'>
      <div
        className={`w-64 h-72 bg-light flex items-center justify-center ${
          location.pathname.includes('products') ||
          location.pathname.includes('wishlist')
            ? 'sm:w-full sm:h-96 md:w-56 md:h-64 lg:w-56 lg:h-64'
            : 'sm:w-56 sm:h-64'
        }`}
      >
        <img
          src={product.images[0] || placeholder}
          alt={product.title}
          className='object-contain w-full h-full'
          loading='lazy'
          onError={handleImageError}
        />
      </div>

      <div className='p-4 flex flex-col items-start'>
        <span className='text-base font-semibold leading-3'>
          {product.title}
        </span>
        <span className='text-base text-dark text-opacity-50 leading-3'>
          {truncateText(product.description, 100)}
        </span>
        <span className='text-lg font-semibold'>
          {'€'} {product.price.toFixed(2)}
        </span>
        <button
          onClick={handleModalOpen}
          className='font-semibold text-base uppercase'
        >
          {details}
        </button>
      </div>

      {isModalOpen && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={product}
        />
      )}
    </div>
  );
};

export default ProductCard;
