import { Button, Input } from '@/shared/components';
import { useContext, useState } from 'react';
import { useUpdateBookMutation } from '../service/book.api';
import { BookContext } from './book';

export const BookImage = () => {
  const { image: bookImage, title } = useContext(BookContext);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [image, setImage] = useState(bookImage);
  return (
    <div className="relative h-96 w-72 shrink-0 bg-secondary-foreground/20">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="img h-full w-full object-cover"
          />
          <Button
            variant="secondary"
            className="w-full rounded-none"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? 'Закрыть форму' : 'Загрузить новое фото'}
          </Button>
        </>
      ) : (
        <div className="h-full">
          <p className="absolute right-0 top-0 mr-2 select-none text-2xl font-semibold italic opacity-30">
            Нет фото :(
          </p>
          <Button
            variant="secondary"
            className="absolute bottom-0 w-full rounded-none"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? 'Закрыть форму' : 'Загрузить фото'}
          </Button>
        </div>
      )}
      {isFormOpen && (
        <BookImage.AddForm setImage={setImage} setIsFormOpen={setIsFormOpen} />
      )}
    </div>
  );
};

BookImage.AddForm = function BookImageAddForm({
  setImage,
  setIsFormOpen,
}: {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const [inputType, setInputType] = useState<'text' | 'file'>('text');
  const [inputValue, setInputValue] = useState('');

  const { id } = useContext(BookContext);
  const [updateBook, { isSuccess }] = useUpdateBookMutation();

  const submitHandler = () => {
    setIsFormOpen(false);
    setImage(inputValue);
    setInputValue('');
    updateBook({ id, image: inputValue });
  };

  return (
    <div className="mt-3">
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
          {inputType === 'text' ? 'Загрузить файл' : 'Вставить ссылку'}
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
