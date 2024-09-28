import { useEffect, useState } from 'react';

import Layout from '../layout';
import { useLazyGetProductsQuery } from '../../hooks/products-api';
import ProductCard from '../../components/product-card/product-card';
import Pagination from '../../components/pagination/pagination';
import locale from '../../localization/locale';
import Loader from '../../components/loader/loader';

const ProductsContainer = () => {
  const { itemsFound } = locale.products;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20);
  const [totalProducts, setTotalProducts] = useState(0);

  const [triggerGetProducts, { data: productsData, isLoading }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    triggerGetProducts({ skip, limit });
  }, [currentPage, limit, triggerGetProducts]);

  useEffect(() => {
    if (productsData) {
      setTotalProducts(productsData.total);
    }
  }, [productsData]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <Layout>
      <div className='flex flex-col items-center gap-8'>
        <span className='font-medium text-dark opacity-75'>
          {totalProducts} {itemsFound}
        </span>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 2xl:grid-cols-5 justify-between gap-x-14 gap-y-8'>
          {isLoading ? (
            <Loader />
          ) : (
            productsData?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Layout>
  );
};

export default ProductsContainer;
