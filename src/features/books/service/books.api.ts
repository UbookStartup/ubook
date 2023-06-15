import { IBook } from '../lib/interfaces/IBook';
import { globalApi } from '@/shared/services/globalApi';

const bookApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserBook: builder.query<IBook[], string>({
      query: (filter) => ({
        url: `/userBook${filter}`,
      }),
      providesTags: () => ['UserBooks'],
    }),

    updateBook: builder.mutation<IBook, IBook>({
      query: (book) => ({
        url: `/userBook/${book.id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ['UserBooks'],
    }),
  }),
});

export const { useGetAllUserBookQuery, useUpdateBookMutation } = bookApi;
