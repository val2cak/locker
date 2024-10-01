import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../types/user-types';

export const usersApiSlice = createApi({
  reducerPath: 'User-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/users`,
  }),
  tagTypes: ['Users-List'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints(builder) {
    return {
      getSingleUser: builder.query<User, number>({
        query: (id) => `/${id}`,
        providesTags: ['Users-List'],
      }),
    };
  },
});

export const { useGetSingleUserQuery } = usersApiSlice;
