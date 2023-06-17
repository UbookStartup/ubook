import { Separator, Skeleton } from '@/shared/components';
import { useAppDispatch } from '@/shared/hooks/redux';
import { generateKey } from '@/shared/utils';
import { useEffect, useState } from 'react';
import { setBooks } from '../context/booksSlice';
import { useGetAllUserBookQuery } from '../service/books.api';
import { BookCard } from './book-card';
import { BooksHeader } from './books-header';

export const Books = () => {
  const [filter, setFilter] = useState('');
  const { data = [], isLoading, isSuccess } = useGetAllUserBookQuery(filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) dispatch(setBooks(data));
  }, [data, dispatch, isSuccess]);

  return (
    <div className="flex flex-col gap-4">
      <BooksHeader
        setFilter={setFilter}
        filter={filter}
        totalBooks={data.length}
      />
      <Separator />
      <div className="flex flex-wrap gap-4 gap-y-10">
        {!isLoading ? (
          data.map((book) => (
            <BookCard key={generateKey(book.title)} book={book} />
          ))
        ) : (
          <Books.Loader />
        )}
      </div>
    </div>
  );
};

Books.Loader = function BooksLoader() {
  const addSkeletons = () =>
    [...new Array(12)].map(() => (
      <div key={generateKey('Skeleton')} className="flex flex-col gap-4">
        <Skeleton className="h-72 w-60 rounded-none" />
        <Skeleton className="h-9 w-60 rounded-none" />
        <Skeleton className="h-7 w-60 rounded-none" />
        <Skeleton className="h-7 w-60 rounded-none" />
      </div>
    ));

  return <div className="flex flex-wrap gap-4 gap-y-10">{addSkeletons()}</div>;
};
