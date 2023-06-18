import { Button } from '@/shared/components';
import { FC, useContext } from 'react';
import { BookContext } from './book';

export const BookImage: FC = () => {
  const { image, title } = useContext(BookContext);
  return (
    <div className="relative h-96 w-72 shrink-0 bg-secondary-foreground/20">
      {image ? (
        <img
          src={image}
          alt={title}
          className="img h-full w-full object-cover"
        />
      ) : (
        <>
          <p className="absolute right-0 top-0 mr-2 select-none text-2xl font-semibold italic opacity-30">
            Нет фото :(
          </p>
          <Button
            variant="secondary"
            className="absolute bottom-0 w-full rounded-none"
          >
            Загрузить фото
          </Button>
        </>
      )}
    </div>
  );
};
