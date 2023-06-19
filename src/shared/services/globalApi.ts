import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../lib';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['UserBooks', 'Book'],
  endpoints: () => ({}),
});
