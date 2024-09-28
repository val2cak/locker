import { FC, useState } from 'react';

import { Product } from '../../types/product-types';
import ProductDetailsModal from '../product-details-modal/product-details-modal';
import locale from '../../localization/locale';
import { truncateText } from '../../utils/truncate-text';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { details } = locale.common;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className='bg-white hover:shadow-md max-w-64'>
      <div className='w-full h-72 bg-light flex items-center justify-center'>
        <img
          src={product.images[0]}
          alt={product.title}
          className='object-contain w-full h-full'
          loading='lazy'
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
          €{product.price.toFixed(2)}
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
