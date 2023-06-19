import { IBook } from '@/features/books';
import { globalApi } from '@/shared/services/globalApi';

const bookApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookById: builder.query<IBook, number>({
      query: (id) => ({
        url: `/userBook/${id}`,
      }),
      providesTags: (_r, _e, arg) => [{ type: 'Book', id: arg }],
    }),
    updateBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: `/userBook/${book.id}`,
        method: 'PATCH',
        body: book,
      }),
      invalidatesTags: () => ['UserBooks'],
    }),
  }),
});

export const { useGetBookByIdQuery, useUpdateBookMutation } = bookApi;
