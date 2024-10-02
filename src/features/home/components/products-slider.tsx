import { FC, useRef } from 'react';
import {
  HiArrowLongLeft as ArrowBack,
  HiArrowLongRight as ArrowForward,
} from 'react-icons/hi2';

import { Product } from '../../../types/product-types';
import ProductCard from '../../../components/product-card/product-card';

interface Props {
  products: Product[];
  title: string;
}

const ProductsSlider: FC<Props> = ({ products, title }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative sm:px-4 md:px-8 lg:px-12 px-36 flex flex-col gap-2'>
      <div className='flex justify-between items-center w-full px-4'>
        <div className='text-3xl sm:text-lg font-righteous uppercase sm:leading-4'>
          {title}
        </div>
        <div className='flex gap-4'>
          <button
            onClick={scrollLeft}
            className='text-dark bg-light p-2 rounded-full hover:text-opacity-50'
          >
            <ArrowBack className='text-xl' />
          </button>

          <button
            onClick={scrollRight}
            className='text-dark bg-light p-2 rounded-full hover:text-opacity-50'
          >
            <ArrowForward className='text-xl' />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className='flex overflow-x-auto scrollbar-hidden gap-6 mx-4 py-2 2xl:gap-16 scroll-smooth'
      >
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
