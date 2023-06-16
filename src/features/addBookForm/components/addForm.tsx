import { SubmitHandler, useForm } from 'react-hook-form';

interface INewBook {
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
}

export const AddForm = () => {
  const { register, handleSubmit } = useForm<INewBook>();

  const onSubmit: SubmitHandler<INewBook> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-16 text-base"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <input
            className="p-2 dark:bg-black dark:text-white"
            {...(register('title'),
            {
              required: true,
              placeholder: 'Название книги',
            })}
            type="text"
          />
          <select className="p-2 dark:bg-black dark:text-white">
            <option selected disabled>
              Выберите жанр
            </option>
          </select>
        </div>
        <div className="flex justify-between">
          <input
            className="p-2 dark:bg-black dark:text-white"
            {...(register('author'),
            {
              required: true,
              placeholder: 'Автор',
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
            name="file"
            id="file"
          />
          <button className="w-80 bg-gray-200 py-4 font-bold dark:bg-black dark:text-white">
            Добавить книгу
          </button>
        </div>
      </form>
    </div>
  );
};
