import { globalApi } from '@/shared/services/globalApi';
import { IBook } from '../lib/interfaces/IBook';

const booksApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserBook: builder.query<IBook[], string>({
      query: (filter) => ({
        url: `/userBook${filter}`,
      }),
      providesTags: () => ['UserBooks'],
      keepUnusedDataFor: 0,
    }),

    updateBookOnBooksPage: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: `/userBook/${book.id}`,
        method: 'PATCH',
        body: book,
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'Book', id: arg.id }],
    }),
  }),
});

export const { useGetAllUserBookQuery, useUpdateBookOnBooksPageMutation } =
  booksApi;
