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
        query: ({ userInput = '', skip = 0, limit = 20, filters = {} }) => {
          const { selectedCategory, sort } = filters;

          const queryParams = new URLSearchParams();

          if (skip) queryParams.append('skip', skip.toString());
          if (limit) queryParams.append('limit', limit.toString());

          if (sort) {
            if (sort.sortBy) queryParams.append('sortBy', sort.sortBy);
            if (sort.order) queryParams.append('order', sort.order);
          }

          let endpoint;
          if (userInput && userInput.trim() !== '') {
            queryParams.append('q', encodeURI(userInput));
            endpoint = `/search`;
          } else if (selectedCategory && selectedCategory.slug) {
            endpoint = `/category/${selectedCategory.slug}`;
          } else {
            endpoint = '';
          }

          const queryString = queryParams.toString();
          return queryString ? `${endpoint}?${queryString}` : endpoint;
        },
        providesTags: ['Products-List'],
      }),

      getCategories: builder.query<Category[], void>({
        query: () => '/categories',
        providesTags: ['Categories-List'],
        transformResponse: (response: Category[]) => {
          const defaultCategory = { name: 'Category', slug: '' };
          return [defaultCategory, ...response];
        },
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
