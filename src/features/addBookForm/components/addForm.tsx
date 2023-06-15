import React, { useState } from 'react';

interface NewBook {
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
}

export const BookForm: React.FC = () => {
  const [book, setBook] = useState<NewBook>({
    title: '',
    author: '',
    genre: '',
    rating: 0,
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Название книги"
        />
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          placeholder="Жанр"
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Автор"
        />
        <input
          type="range"
          min="1"
          max="5"
          name="rating"
          value={book.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="file"
          name="image"
          id="image"
          value={book.image}
          placeholder="Загрузить обложку"
          onChange={handleChange}
        />
        <button className="w-80 bg-gray-200 py-2 font-semibold" type="submit">
          Добавить книгу
        </button>
      </div>
    </form>
  );
};
