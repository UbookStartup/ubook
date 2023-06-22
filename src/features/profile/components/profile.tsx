import { Pass } from './Pass';
import { ProfileInput } from './ProfileInput';
import { Button, Input } from '@/shared/components';
import { RootState, changeData } from '@/shared/context';
import { IUser } from '@/shared/lib';
import { IPass } from '@/shared/lib/IPass';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
  const [isPassChanging, setIsPassChanging] = React.useState(false);
  const [isPhotoChanging, setIsPhotoChanging] = React.useState(false);

  const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = React.useState<IUser>(user);
  const [passwords, setPasswords] = React.useState<IPass>({
    oldPass: '',
    newPass: '',
    passError: false,
  });

  const dispatch = useDispatch();

  function changePhoto() {
    setIsPhotoChanging((prevState) => !prevState);
    setFormData((prevData) => {
      return { ...prevData, imageUrl: '' };
    });
  }

  function saveData() {
    if (formData.password !== passwords.oldPass) {
      setPasswords((prev) => {
        return { ...prev, passError: true };
      });
    } else {
      setIsPassChanging(false);
      setIsPhotoChanging(false);
      setFormData((prevData) => {
        return { ...prevData, password: passwords.newPass };
      });
      dispatch(changeData(formData));
    }
  }

  function cancelPassChange() {
    setIsPassChanging(false);
  }

  return (
    <div>
      <h2 className="mb-10 text-3xl font-medium">Профиль</h2>
      <div className="flex">
        <div className="mr-20 shrink-0">
          <img
            src={user.imageUrl}
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
              className="ml-1 mt-1 flex h-10 w-36 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
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
              value={formData.email}
              setFormData={setFormData}
            />
            <ProfileInput
              name="name"
              type="text"
              text="Имя"
              value={formData.name}
              setFormData={setFormData}
            />
            <ProfileInput
              name="surname"
              type="text"
              text="Фамилия"
              value={formData.surname}
              setFormData={setFormData}
            />
            {!isPassChanging && (
              <Pass
                setIsPassChanging={setIsPassChanging}
                setPasswords={setPasswords}
              />
            )}
            {isPassChanging && (
              <>
                <ProfileInput
                  name="oldPass"
                  type="password"
                  text="Старый пароль"
                  value={passwords.oldPass}
                  setFormData={setPasswords}
                />
                <ProfileInput
                  name="newPass"
                  type="password"
                  text="Новый пароль"
                  value={passwords.newPass}
                  setFormData={setPasswords}
                />
                {passwords.passError && (
                  <div
                    style={{ color: 'red', fontSize: '12px', textAlign: 'end' }}
                  >
                    Пароли не совпадают
                  </div>
                )}
                <button
                  onClick={cancelPassChange}
                  className="text-sm text-accent-foreground/50"
                  style={{ textAlign: 'end' }}
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
