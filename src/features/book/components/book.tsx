/* eslint-disable no-nested-ternary */
import { IBook } from '@/features/books';
import { Button, Separator, Skeleton } from '@/shared/components';
import { ArrowLeft } from 'lucide-react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBook } from '../hooks/useBook';
import { BookContent } from './book-content';
import { BookHeader } from './book-header';
import { BookImage } from './book-image';

export const BookContext = createContext<Partial<IBook>>({});

export const Book = () => {
  const { data: book, isLoading } = useBook();

  return (
    <BookContext.Provider value={book!}>
      <div className="flex flex-col gap-4">
        <Book.PageHeader />
        <Separator />
        {isLoading ? (
          <Book.Loader />
        ) : book ? (
          <div className="flex gap-4">
            <BookImage />
            <div className="flex w-full flex-col gap-4">
              <BookHeader />
              <Separator className="opacity-50" />
              <BookContent />
            </div>
          </div>
        ) : (
          <div>Книга не найдена :(</div>
        )}
      </div>
    </BookContext.Provider>
  );
};

Book.Loader = function BookLoader(): JSX.Element {
  return (
    <div className="flex gap-4">
      <Skeleton className="h-96 w-72 shrink-0" />
      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-16 w-72" />
        <Skeleton className="h-4 w-48" />
        <Separator />
      </div>
    </div>
  );
};

Book.PageHeader = function BookPageHeader(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outline"
        className="justify-between"
        onClick={() => navigate('/books')}
      >
        <ArrowLeft className="mr-2" />
        <span>Вернуться ко всем книгам</span>
      </Button>
    </div>
  );
};
