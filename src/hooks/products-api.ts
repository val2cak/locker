import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  Category,
  ProductsRequest,
  ProductsResponse,
} from '../types/product-types';

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
      getProducts: builder.query<ProductsResponse, ProductsRequest>({
        query: ({ userInput, skip, limit, sort }) => {
          const queryParams = new URLSearchParams();

          if (userInput && userInput.trim() !== '') {
            queryParams.append('q', encodeURI(userInput));
          }

          if (skip) queryParams.append('skip', skip.toString());
          if (limit) queryParams.append('limit', limit.toString());
          if (sort) {
            if (sort.sortBy) queryParams.append('sortBy', sort.sortBy);
            if (sort.order) queryParams.append('order', sort.order);
          }

          const queryString = queryParams.toString();
          return queryString ? `/search?${queryString}` : '';
        },
        providesTags: ['Products-List'],
      }),

      getCategories: builder.query<Category[], void>({
        query: () => '/categories',
        providesTags: ['Categories-List'],
      }),

      getProductsByCategory: builder.query<ProductsResponse, string>({
        query: (category) => `category/${category}`,
        providesTags: ['Products-List'],
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productsApiSlice;
