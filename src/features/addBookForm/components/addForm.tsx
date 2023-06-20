import { Button, Input, Rating, Separator } from '@/shared/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface INewBook {
  title: string;
  author: string;
  genre: string;
  image: string;
  scores: number;
}

export const AddForm = () => {
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewBook>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mr-2 text-4xl font-medium">Добавление книги</h1>
      <Separator />
      <div className="flex justify-between">
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-md flex-col gap-6"
        >
          <div className="space-y-1">
            <label htmlFor="name">Название книги</label>
            <Input
              {...register('title', {
                required: true,
              })}
              type="text"
              id="name"
              className="rounded-none border-b border-input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name">Автор</label>
            <Input
              {...register('author', {
                required: true,
              })}
              type="text"
              id="name"
              className="rounded-none border-b border-input"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name">Жанр</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите жанр" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
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
          <Button variant="secondary" className="pl-0">
            Добавить книгу
          </Button>
        </form>

        <div>Form</div>
      </div>
    </div>
  );
};
