import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/ui';
import { trimLine } from '@/shared/utils';
import { Heart, Pencil } from 'lucide-react';
import { FC, useState } from 'react';

interface BookCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  id: number;
  title: string;
  author: string;
  image?: string;
  scores: number;
  addDate: string;
  inFavorites?: boolean;
}

export const BookCard: FC<BookCardProps> = ({
  title,
  id,
  author,
  image,
  scores,
  addDate,
  inFavorites = false,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(inFavorites);

  return (
    <div {...props} className="flex w-60 shrink-0 flex-col gap-4">
      <div className="relative h-72 bg-secondary-foreground/20 text-center">
        {image ? (
          <img
            src={image}
            alt="book"
            className="img h-72 w-full object-cover"
          />
        ) : (
          <p className="absolute right-0 top-0 mr-2 select-none text-2xl font-semibold italic">
            Нет фото :(
          </p>
        )}
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
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="text"
            className="h-fit p-2 text-accent-foreground/30 hover:bg-accent-foreground/10"
          >
            <Pencil className="h-5 w-5" />
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
        <small className="text-sm font-medium leading-none">{addDate}</small>
      </div>
    </div>
  );
};
