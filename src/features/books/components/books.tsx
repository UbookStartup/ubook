import { useGetAllUserBookQuery } from '../service/books.api';
import { BookCard } from './book-card';
import { BooksHeader } from './books-header';
import { Separator } from '@/shared/components';
import { generateKey } from '@/shared/utils';
import { useState } from 'react';

export const Books = () => {
  const [filter, setFilter] = useState('');

  const { data, isLoading } = useGetAllUserBookQuery(filter);
  return (
    <div className="flex flex-col gap-4">
      <BooksHeader setFilter={setFilter} filter={filter} />
      <Separator />
      <div className="flex flex-wrap gap-4 gap-y-10">
        {!isLoading &&
          data!.map((book) => (
            <BookCard key={generateKey(book.title)} {...book} />
          ))}
      </div>
    </div>
  );
};
