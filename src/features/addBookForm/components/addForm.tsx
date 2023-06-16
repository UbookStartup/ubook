import { SubmitHandler, useForm } from 'react-hook-form';

interface INewBook {
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
}

export const AddForm = () => {
  const { register, handleSubmit, reset } = useForm<INewBook>();

  const onSubmit: SubmitHandler<INewBook> = () => {
    reset();
  };

  return (
    <div>
      <form
        className="flex flex-col gap-16 text-base"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <input
            {...(register('title'),
            {
              required: true,
              placeholder: 'Название книги',
            })}
            type="text"
          />
          <select>
            <option selected disabled>
              Выберите жанр
            </option>
          </select>
        </div>
        <div className="flex justify-between">
          <input
            {...(register('author'),
            {
              required: true,
              placeholder: 'Имя автора',
            })}
            type="text"
          />
          <input
            {...(register('rating'),
            {
              required: true,
            })}
            type="range"
            min="1"
            max="5"
          />
        </div>
        <div className="flex justify-between">
          <input
            {...(register('image'),
            {
              required: false,
            })}
            type="file"
          />
          <button className="w-80 bg-gray-200 py-4 font-bold">
            Добавить книгу
          </button>
        </div>
      </form>
    </div>
  );
};
