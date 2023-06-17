/* eslint-disable no-nested-ternary */
import { useUpdateBookMutation } from '@/features/books';
import { Button, Separator, Skeleton } from '@/shared/components';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBook } from '../hooks/useBook';
import { BookContent } from './book-content';
import { BookHeader } from './book-header';
import { BookImage } from './book-image';

export const Book = () => {
  const navigate = useNavigate();

  const { data: book, isLoading } = useBook();

  const [updateBook] = useUpdateBookMutation();

  const updateField = <T,>(
    fieldName: 'image' | 'scores' | 'addDate' | 'inFavorites',
    value: T
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateBook({ id: book!.id, [fieldName]: value });

  return (
    <div className="flex flex-col gap-4">
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

      <Separator />

      {isLoading ? (
        <Book.Loader />
      ) : book ? (
        <div className="flex gap-4">
          <BookImage image={book.image} title={book.title} />
          <div className="flex w-full flex-col gap-4">
            <BookHeader title={book.title} author={book.author} />
            <Separator className="opacity-50" />
            <BookContent
              addDate={book.addDate}
              inFavorites={book.inFavorites}
              scores={book.scores}
              updateFields={updateField}
            />
          </div>
        </div>
      ) : (
        <div>Книга не найдена :(</div>
      )}
    </div>
  );
};

Book.Loader = function BookLoader() {
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
