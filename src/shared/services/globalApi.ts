import { API_URL } from '../lib';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['UserBooks'],
  endpoints: () => ({}),
});
