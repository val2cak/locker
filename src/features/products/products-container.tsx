import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Layout from '../layout';
import {
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
} from '../../hooks/products-api';
import ProductCard from '../../components/product-card/product-card';
import Pagination from '../../components/pagination/pagination';
import locale from '../../localization/locale';
import Loader from '../../components/loader/loader';
import Filters from './components/filters';
import { Filters as FiltersType } from '../../types/product-types';
import { sortOptions } from '../../constants/sort-options';

const ProductsContainer = () => {
  const { itemsFound } = locale.products;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20);
  const [totalProducts, setTotalProducts] = useState(0);

  const [filters, setFilters] = useState<FiltersType>({
    sort: sortOptions[0],
    selectedCategory: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  const [triggerGetProducts, { data: productsData, isLoading }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    if (!categoriesLoading && categories) {
      const queryParams = new URLSearchParams(location.search);
      const categorySlug = queryParams.get('category');
      const category = categories.find((cat) => cat.slug === categorySlug);
      setFilters((prev) => ({
        ...prev,
        selectedCategory: category || null,
      }));
    }
  }, [location.search, categories, categoriesLoading]);

  useEffect(() => {
    const skip = (currentPage - 1) * limit;

    const queryParams = new URLSearchParams(location.search);
    if (filters.selectedCategory && filters.selectedCategory.slug !== '') {
      queryParams.set('category', filters.selectedCategory.slug);
    }
    navigate({ search: queryParams.toString() });

    triggerGetProducts({
      userInput: '',
      skip,
      limit,
      filters: filters,
    });
  }, [currentPage, limit, filters, triggerGetProducts, navigate]);

  useEffect(() => {
    if (productsData) {
      setTotalProducts(productsData.total);
    }
  }, [productsData]);

  const totalPages = Math.ceil(totalProducts / limit);

  const handleResetFilters = () => {
    setFilters({
      sort: sortOptions[0],
      selectedCategory: categories[0],
    });
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete('category');
    navigate({ search: queryParams.toString() });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {isLoading || categoriesLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-col items-center gap-8'>
          <Filters
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            handleResetFilters={handleResetFilters}
          />

          <div className='sm:px-8 md:px-12 lg:px-16 px-40 pb-8 flex flex-col items-center gap-8'>
            <span className='font-medium text-dark opacity-75'>
              {totalProducts} {itemsFound}
            </span>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 grid-cols-4 2xl:grid-cols-5 justify-between gap-x-14 gap-y-8 sm:gap-x-0 md:gap-x-4 lg:gap-x-4 2xl:gap-x-24'>
              {isLoading ? (
                <Loader />
              ) : (
                productsData?.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>

            {!isLoading && productsData?.total > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductsContainer;
