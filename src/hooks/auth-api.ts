import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AuthResponse, LoginRequest } from '../types/user-types';
import { apiUrl } from '../config/config';

export const authApiSlice = createApi({
  reducerPath: 'Auth-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/user`,
  }),
  endpoints(builder) {
    return {
      login: builder.mutation<AuthResponse, LoginRequest>({
        query: ({ username, password }) => ({
          url: '/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }),
      }),
    };
  },
});

export const { useLoginMutation } = authApiSlice;
