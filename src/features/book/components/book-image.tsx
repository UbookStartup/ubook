import { Button, Input } from '@/shared/components';
import { useContext, useState } from 'react';
import { useUpdateBookMutation } from '../service/book.api';
import { BookContext } from './book';

export const BookImage = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const { image, title } = useContext(BookContext);
  return (
    <div className="relative h-96 w-72 shrink-0 bg-secondary-foreground/20">
      {image ? (
        <img
          src={image}
          alt={title}
          className="img h-full w-full object-cover"
        />
      ) : (
        <>
          <p className="absolute right-0 top-0 mr-2 select-none text-2xl font-semibold italic opacity-30">
            Нет фото :(
          </p>
          <Button
            variant="secondary"
            className="absolute bottom-0 w-full rounded-none"
            onClick={() => setIsInputOpen(!isInputOpen)}
          >
            {isInputOpen ? 'Закрыть форму' : 'Загрузить фото'}
          </Button>
        </>
      )}
      {isInputOpen && <BookImage.AddForm />}
    </div>
  );
};

BookImage.AddForm = function BookImageAddForm(): JSX.Element {
  const [inputType, setInputType] = useState<'text' | 'file'>('text');
  const [inputValue, setInputValue] = useState('');

  const { id } = useContext(BookContext);
  const [updateBook, { isSuccess }] = useUpdateBookMutation();

  const submitHandler = () => {
    updateBook({ id, image: inputValue });
  };
  return (
    <div className="absolute -bottom-28 w-full">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mb-3 rounded-none border file:text-primary"
        type={inputType}
        placeholder="Введите ссылку"
      />
      <div className="flex items-center justify-between">
        <Button
          variant="text"
          className="px-0"
          onClick={() => {
            setInputValue('');
            setInputType(inputType === 'text' ? 'file' : 'text');
          }}
        >
          {inputType === 'file' ? 'Вставить ссылку' : 'Загрузить файл'}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={!inputValue}
          onClick={submitHandler}
        >
          Загрузить
        </Button>
      </div>
    </div>
  );
};
