import { IBook } from '@/features/books';
import { Button } from '@/shared/components';
import { convertDate } from '@/shared/utils';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/dist/query';
import { MutationActionCreatorResult } from '@reduxjs/toolkit/dist/query/core/buildInitiate';
import { Heart } from 'lucide-react';
import { FC, useState } from 'react';

interface BookContentProps
  extends Pick<IBook, 'inFavorites' | 'scores' | 'addDate'> {
  updateFields: (
    fieldName: string,
    value: boolean
  ) => MutationActionCreatorResult<
    MutationDefinition<
      IBook,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      'UserBooks',
      IBook,
      'globalApi'
    >
  >;
}

export const BookContent: FC<BookContentProps> = ({
  inFavorites,
  scores,
  addDate,
  updateFields,
}) => {
  const [isFavorite, setIsFavorite] = useState(inFavorites);

  return (
    <div className="space-y-4">
      <p className="text-lg">
        <span className="font-light">Дата добавления:</span>
        <span className="font-semibold"> {convertDate(addDate)}</span>
      </p>
      {isFavorite ? (
        <Button
          size="lg"
          variant="red"
          className="after:content-['В_Избранном'] hover:after:content-['Убрать_из_Избранного?']"
          onClick={() => {
            setIsFavorite(false);
            updateFields('inFavorites', false);
          }}
        >
          <Heart className="mr-3 h-5 w-5" />
        </Button>
      ) : (
        <Button
          size="lg"
          variant="outline"
          className="after:content-['Не_в_Избранном'] hover:after:content-['Добавить_В_Избранное']"
          onClick={() => {
            setIsFavorite(true);
            updateFields('inFavorites', true);
          }}
        >
          <Heart className="mr-3 h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
