import { Button } from '@/shared/components';
import { FC } from 'react';
import { FilterValue } from '../lib/FilterValue';

interface BooksHeaderProps {
  totalBooks: number;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const BooksHeader: FC<BooksHeaderProps> = ({
  setFilter,
  filter,
  totalBooks,
}) => {
  const handleClick = (initial: string) => {
    if (filter === initial) {
      setFilter('');
      return;
    }
    setFilter(initial);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-end">
        <h1 className="mr-2 text-4xl font-medium">Мои книги</h1>
        <h2 className="mb-0.5 text-sm font-normal">Всего книг: {totalBooks}</h2>
      </div>
      <div>
        <Button
          variant="text"
          className="font-semibold text-accent-foreground/20"
          onClick={() => setFilter('')}
        >
          Сбросить фильтры
        </Button>
        <Button
          variant="text"
          className={`font-semibold ${
            filter === FilterValue.sortByScores && 'text-accent-foreground'
          }`}
          onClick={() => handleClick(FilterValue.sortByScores)}
        >
          По убываю рейтинга
        </Button>
        <Button
          variant="text"
          className={`font-semibold ${
            filter === FilterValue.sortByDate && 'text-accent-foreground'
          }`}
          onClick={() => handleClick(FilterValue.sortByDate)}
        >
          Недавние
        </Button>
        <Button
          variant="text"
          className={`font-semibold ${
            filter === FilterValue.inFavorites && 'text-accent-foreground'
          }`}
          onClick={() => handleClick(FilterValue.inFavorites)}
        >
          Избранные
        </Button>
      </div>
    </div>
  );
};
