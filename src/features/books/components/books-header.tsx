import { FilterValue } from '../lib/filterValue';
import { Button } from '@/shared/components';
import { FC } from 'react';

interface BooksHeaderProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const BooksHeader: FC<BooksHeaderProps> = ({ setFilter, filter }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-medium">Мои книги</h1>
      <div>
        <Button
          variant="text"
          className={`font-semibold ${
            filter === FilterValue.sortByScores && 'text-accent-foreground'
          }`}
          onClick={() => setFilter(FilterValue.sortByScores)}
        >
          По рейтингу
        </Button>
        <Button variant="text" className="font-semibold">
          По дате
        </Button>
        <Button
          variant="text"
          className={`font-semibold ${
            filter === FilterValue.inFavorites && 'text-accent-foreground'
          }`}
          onClick={() => setFilter(FilterValue.inFavorites)}
        >
          Избранные
        </Button>
      </div>
    </div>
  );
};
