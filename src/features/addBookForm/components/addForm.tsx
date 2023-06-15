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

  const onSubmit: SubmitHandler<INewBook> = (data) => {
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...(register('author'),
          {
            required: true,
            placeholder: 'Имя автора',
          })}
          type="text"
        />
        <select>
          <option selected disabled>
            Выберите жанр
          </option>
        </select>
        <input
          {...(register('title'),
          {
            required: true,
            placeholder: 'Название книги',
          })}
          type="text"
        />
        <input
          {...(register('image'),
          {
            required: false,
          })}
          type="file"
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
        <button>Send</button>
      </form>
    </div>
  );
};
