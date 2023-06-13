import React from 'react';
import { Button, Input } from '@/shared/components';
import { ProfileInput } from './ProfileInput';
import { Pass } from './Pass';

export const Profile = () => {
  const [isPassChanging, setIsPassChanging] = React.useState(false);
  const [isPhotoChanging, setIsPhotoChanging] = React.useState(false);

  function changePhoto() {
    setIsPhotoChanging((prevState) => !prevState);
  }

  function saveData() {
    setIsPassChanging(false);
    setIsPhotoChanging(false);
  }

  return (
    <div className="ps-8">
      <h2 className="mb-10 text-3xl font-medium">Профиль</h2>
      <div className="flex">
        <div className="mr-20 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="mb-4 h-40 w-40 object-cover"
            alt="Фото"
          />
          <button
            onClick={changePhoto}
            className="text-sm text-accent-foreground/50"
          >
            Обновить фотографию
          </button>
          {isPhotoChanging && (
            <Input placeholder="Вставьте URL" className="w-40" />
          )}
        </div>
        <div>
          <div className="mb-20 flex flex-col gap-4">
            <ProfileInput type="text" text="Почта" value="mail@chernix.com" />
            <ProfileInput type="text" text="Имя" value="Кирилл Черных" />
            {!isPassChanging && <Pass setIsPassChanging={setIsPassChanging} />}
            {isPassChanging && (
              <>
                <ProfileInput type="password" text="Старый пароль" value="" />
                <ProfileInput type="password" text="Новый пароль" value="" />
              </>
            )}
          </div>
          <Button onClick={saveData} className="h-10 w-40 text-sm">
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
