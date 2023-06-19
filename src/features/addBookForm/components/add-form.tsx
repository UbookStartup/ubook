import { Button, Input, Rating, Separator } from '@/shared/components';
import { useState } from 'react';

export const AddForm = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mr-2 text-4xl font-medium">Добавление книги</h1>
      <Separator />
      <div className="flex justify-between">
        <form className="flex w-full max-w-md flex-col gap-4">
          <div className="space-y-1">
            <label htmlFor="name">Название книги</label>
            <Input
              type="text"
              id="name"
              className="rounded-none border-b border-input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name">Автор</label>
            <Input
              type="text"
              id="name"
              className="rounded-none border-b border-input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name">Жанр</label>
            <Input
              type="text"
              id="name"
              className="rounded-none border-b border-input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name">Оценка</label>
            <Rating rating={rating} setRating={setRating} />
          </div>
          <div>
            <Button variant="text" type="button" className="pl-0">
              Загрузить обложку
            </Button>
          </div>
          <Button variant="secondary" type="button" className="pl-0">
            Добавить книгу
          </Button>
        </form>
        <div>Form</div>
      </div>
    </div>
  );
};
