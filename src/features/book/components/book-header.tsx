import { FC, useContext } from 'react';
import { BookContext } from './book';

export const BookHeader: FC = () => {
  const { author, title } = useContext(BookContext);

  return (
    <div>
      <h1 className="mr-2 text-5xl font-medium">{title}</h1>
      <small className="text-sm font-semibold leading-none">
        <span className="font-light">Автор:</span> {author}
      </small>
    </div>
  );
};
