import { Button, Rating } from '@/shared/components';
import { convertDate } from '@/shared/utils';
import { Heart } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useUpdateBookMutation } from '../service/book.api';
import { BookContext } from './book';

export const BookContent = () => {
  return (
    <div className="space-y-4">
      <BookContent.Favorites />
      <BookContent.Date />
      <BookContent.Scores />
    </div>
  );
};

BookContent.Date = function BookContentDate(): JSX.Element {
  const { addDate } = useContext(BookContext);
  return (
    <p>
      <p className="mb-1.5 font-light">Дата добавления:</p>
      <span className="text-lg font-semibold"> {convertDate(addDate)}</span>
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

BookContent.Scores = function BookContentScores(): JSX.Element {
  const [updateBook] = useUpdateBookMutation();

  const { id, scores } = useContext(BookContext);
  const [rating, setRating] = useState(scores);

  useEffect(() => {
    setRating(scores);
  }, [scores]);

  const updateRating = (initialRating: number) => {
    setRating(initialRating);
    updateBook({ id, scores: initialRating });
  };
  return (
    <div>
      <p className="mb-1.5 font-light">Оценка:</p>
      <div className="flex">
        <Rating rating={rating!} setRating={updateRating} />
        <span className="ml-2">{rating}/5</span>
      </div>
    </div>
  );
};
