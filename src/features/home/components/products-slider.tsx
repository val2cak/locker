import { FC } from 'react';

import { Product } from '../../../types/product-types';
import ProductCard from '../../../components/product-card/product-card';

interface Props {
  products: Product[];
}

const ProductsSlider: FC<Props> = ({ products }) => {
  return (
    <div className='relative px-36'>
      <div className='flex overflow-x-auto scrollbar-hidden gap-6 py-4 px-4'>
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
