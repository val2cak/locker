import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AuthResponse, LoginRequest } from '../types/user-types';

export const authApiSlice = createApi({
  reducerPath: 'Auth-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/user`,
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
