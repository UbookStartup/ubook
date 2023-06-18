import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/ui';
import { convertDate, trimLine } from '@/shared/utils';
import { Heart, MousePointerClick } from 'lucide-react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../lib/interfaces/IBook';
import { useUpdateBookOnBooksPageMutation } from '../service/books.api';

interface BookCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  book: IBook;
}

export const BookCard: FC<BookCardProps> = ({ book, ...props }) => {
  const { id, image, title, scores, author, addDate, inFavorites } = book;

  const [isFavorite, setIsFavorite] = useState(inFavorites);
  const [updateBook] = useUpdateBookOnBooksPageMutation();

  const addToFavorite = () => {
    setIsFavorite(!isFavorite);
    updateBook({ ...book, inFavorites: !book.inFavorites });
  };

  return (
    <div {...props} className="flex w-60 shrink-0 flex-col gap-4">
      <div className="group relative h-72 bg-secondary-foreground/20 text-center">
        <Link to={`/book/${id}`}>
          {image ? (
            <img
              src={image}
              alt={title}
              className="img h-full w-full object-cover"
            />
          ) : (
            <p className="absolute right-0 top-0 mr-2 select-none text-2xl font-semibold italic opacity-30">
              Нет фото :(
            </p>
          )}
          <div className="invisible absolute inset-y-0 flex flex-col items-center justify-center bg-secondary opacity-0 transition-opacity group-hover:visible group-hover:opacity-70">
            <span className="p-2 text-lg font-semibold">
              Щелкните, чтобы перейти на книгу
            </span>
            <MousePointerClick className="h-7 w-7 group-hover:animate-ping" />
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {title.length > 15 ? (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <small className="cursor-default text-lg font-medium leading-none">
                    {trimLine(title, 15)}
                  </small>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <small className="text-lg font-medium leading-none">{title}</small>
          )}
          <small className="text-xs font-medium leading-none">{author}</small>
        </div>

        <div className="flex gap-1">
          <Button
            variant="textWithoutHover"
            className={`h-fit p-2 hover:bg-accent-foreground/10 ${
              isFavorite ? 'text-red-600' : 'text-accent-foreground/30'
            }`}
            onClick={addToFavorite}
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <small className="text-sm font-medium leading-none">Рейтинг</small>
        <small className="text-sm font-medium leading-none first-letter:text-lg">
          {scores}/5
        </small>
      </div>

      <div className="flex items-end justify-between text-muted-foreground/50">
        <small className="text-sm font-medium leading-none">
          Дата добавления
        </small>
        <small className="text-sm font-medium leading-none">
          {convertDate(addDate)}
        </small>
      </div>
    </div>
  );
};
