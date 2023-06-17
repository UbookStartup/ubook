import { IBook } from '@/features/books';
import { globalApi } from '@/shared/services/globalApi';

const bookApi = globalApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookById: builder.query<IBook, number>({
      query: (id) => ({
        url: `/userBook/${id}`,
      }),
      providesTags: (result, error, arg) => [{ type: 'Book', id: arg }],
    }),
  }),
});

export const { useGetBookByIdQuery } = bookApi;
