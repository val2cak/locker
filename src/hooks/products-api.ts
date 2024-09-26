import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Category, Product } from '../types/product-types';

export const productsApiSlice = createApi({
  reducerPath: 'Product-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/products`,
  }),
  tagTypes: ['Products-List', 'Categories-List'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints(builder) {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => '',
        providesTags: ['Products-List'],
      }),
      getCategories: builder.query<Category[], void>({
        query: () => '/categories',
        providesTags: ['Categories-List'],
      }),
    };
  },
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApiSlice;
