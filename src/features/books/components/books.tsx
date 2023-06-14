import { booksMock } from '../data/booksMock';
import { BookCard } from './book-card';
import { BooksHeader } from './books-header';
import { Separator } from '@/shared/components';
import { generateKey } from '@/shared/utils';

export const Books = () => {
  return (
    <div className="flex flex-col gap-4">
      <BooksHeader />
      <Separator />
      <div className="flex flex-wrap gap-4 gap-y-6">
        {booksMock.map((book) => (
          <BookCard key={generateKey(book.title)} {...book} />
        ))}
      </div>
    </div>
  );
};
