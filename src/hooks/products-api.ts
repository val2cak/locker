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
      getProducts: builder.query<Product[], string>({
        query: (userInput: string) => {
          const queryParams = new URLSearchParams();
          if (userInput && userInput.trim() !== '') {
            queryParams.append('q', encodeURI(userInput));
          }
          const queryString = queryParams.toString();
          const encodedQueryString = queryString
            ? `/search?${queryString}`
            : '';
          return encodedQueryString ? encodedQueryString : '';
        },
        providesTags: ['Products-List'],
      }),
      getCategories: builder.query<Category[], void>({
        query: () => '/categories',
        providesTags: ['Categories-List'],
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetCategoriesQuery,
} = productsApiSlice;
