import { Button } from '@/shared/components';
import { convertDate } from '@/shared/utils';
import { Heart } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useUpdateBookMutation } from '../../service/book.api';
import { BookContext } from '../book';
import { Rating } from '../rating';

export const BookContent = () => {
  const [updateBook] = useUpdateBookMutation();
  const { scores } = useContext(BookContext);

  return (
    <div className="space-y-4">
      <BookContent.Date />
      <BookContent.Favorites />
      <Rating scores={scores!} />
    </div>
  );
};

BookContent.Date = function BookContentDate(): JSX.Element {
  const { addDate } = useContext(BookContext);
  return (
    <p className="text-lg">
      <span className="font-light">Дата добавления:</span>
      <span className="font-semibold"> {convertDate(addDate)}</span>
    </p>
  );
};

BookContent.Favorites = function BookContentFavorites(): JSX.Element {
  const { inFavorites, id } = useContext(BookContext);
  const [isFavorite, setIsFavorite] = useState(inFavorites);
  const [updateBook] = useUpdateBookMutation();

  useEffect(() => {
    setIsFavorite(inFavorites);
  }, [inFavorites]);

  return (
    <Button
      size="lg"
      variant={`${isFavorite ? 'red' : 'outline'}`}
      className={`transition-all ${
        isFavorite
          ? "after:content-['В_Избранном'] hover:after:content-['Убрать_из_Избранного?']"
          : "after:content-['Не_в_Избранном'] hover:after:content-['Добавить_В_Избранное']"
      }`}
      onClick={() => {
        setIsFavorite(!isFavorite);
        updateBook({ id, inFavorites: !isFavorite });
      }}
    >
      <Heart className="mr-3 h-5 w-5" />
    </Button>
  );
};
