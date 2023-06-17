import { FC } from 'react';

export const BookHeader: FC<{ title: string; author: string }> = ({
  title,
  author,
}) => {
  return (
    <>
      <h1 className="mr-2 text-5xl font-medium">{title}</h1>
      <small className="text-sm font-semibold leading-none">
        <span className="font-light">Автор:</span> {author}
      </small>
    </>
  );
};
