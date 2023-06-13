// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from '@/shared/components';
import { ProfileInput } from './ProfileInput';
import { Pass } from './Pass';
import { changeData } from '@/shared/state/user';

export interface UserInterface {
  user: {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    imageUrl: string;
  };
}

export const Profile = () => {
  const [isPassChanging, setIsPassChanging] = React.useState(false);
  const [isPhotoChanging, setIsPhotoChanging] = React.useState(false);
  const { name, surname, email, imageUrl } = useSelector(
    (state: UserInterface) => state.user
  );

  const [formData, setFormData] = React.useState({
    name,
    surname,
    email,
    imageUrl: '',
  });
  const dispatch = useDispatch();

  function changePhoto() {
    setIsPhotoChanging((prevState) => !prevState);
    setFormData((prevData) => {
      return { ...prevData, imageUrl: '' };
    });
  }

  function saveData() {
    setIsPassChanging(false);
    setIsPhotoChanging(false);
    dispatch(changeData(formData));
  }

  function cancelPassChange() {
    setIsPassChanging(false);
  }

  return (
    <div className="ps-8">
      <h2 className="mb-10 text-3xl font-medium">Профиль</h2>
      <div className="flex">
        <div className="mr-20 shrink-0">
          <img
            src={imageUrl}
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
            <Input
              name="imageUrl"
              placeholder="Вставьте URL"
              className="mt-1 w-40"
              value={formData.imageUrl}
              onChange={(event) =>
                setFormData((prevData) => {
                  return { ...prevData, imageUrl: event.target.value };
                })
              }
              autoComplete="on"
            />
          )}
        </div>
        <div>
          <div className="mb-20 flex flex-col gap-4">
            <ProfileInput
              name="email"
              type="text"
              text="Почта"
              value={email}
              formData={formData}
              setFormData={setFormData}
            />
            <ProfileInput
              name="name"
              type="text"
              text="Имя"
              value={name}
              formData={formData}
              setFormData={setFormData}
            />
            <ProfileInput
              name="surname"
              type="text"
              text="Фамилия"
              value={surname}
              formData={formData}
              setFormData={setFormData}
            />
            {!isPassChanging && <Pass setIsPassChanging={setIsPassChanging} />}
            {isPassChanging && (
              <>
                <ProfileInput
                  name="oldPass"
                  type="password"
                  text="Старый пароль"
                  value=""
                  formData={formData}
                  setFormData={setFormData}
                />
                <ProfileInput
                  name="newPass"
                  type="password"
                  text="Новый пароль"
                  value=""
                  formData={formData}
                  setFormData={setFormData}
                />
                <button
                  onClick={cancelPassChange}
                  className="text-sm text-accent-foreground/50"
                >
                  Отменить
                </button>
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
