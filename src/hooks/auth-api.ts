import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AuthResponse, LoginRequest } from '../types/user-types';

export const authApiSlice = createApi({
  reducerPath: 'Auth-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/auth`,
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      login: builder.mutation<AuthResponse, LoginRequest>({
        query: ({ username, password, expiresInMins = 60 }) => ({
          url: '/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: { username, password, expiresInMins },
        }),
      }),
    };
  },
});

export const { useLoginMutation } = authApiSlice;
