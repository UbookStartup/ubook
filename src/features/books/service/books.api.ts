import { IBook } from '../lib/interfaces/IBook';
import { globalApi } from '@/shared/services/globalApi';

const bookApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserBook: builder.query<IBook[], string>({
      query: (filter) => ({
        url: `/userBook${filter}`,
      }),
    }),
  }),
});

export const { useGetAllUserBookQuery } = bookApi;
