import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../types/user-types';
import { apiUrl } from '../config/config';

export const usersApiSlice = createApi({
  reducerPath: 'User-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/users`,
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
