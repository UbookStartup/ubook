import { Button } from '@/shared/components';

export const BooksHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-4xl font-medium">Мои книги</h1>
      <div>
        <Button variant="text" className="font-semibold">
          По рейтингу
        </Button>
        <Button variant="text" className="font-semibold">
          По дате
        </Button>
        <Button variant="text" className="font-semibold">
          Избранные
        </Button>
      </div>
    </div>
  );
};
