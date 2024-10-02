import { FC } from 'react';

import { Product } from '../../../types/product-types';
import ProductCard from '../../../components/product-card/product-card';

interface Props {
  products: Product[];
}

const ProductsSlider: FC<Props> = ({ products }) => {
  return (
    <div className='relative px-36 sm:px-8 md:px-12 lg:px-16'>
      <div className='flex overflow-x-auto scrollbar-hidden gap-6 py-4 px-4 sm:px-0 md:px-0 lg:px-0 2xl:gap-16'>
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
