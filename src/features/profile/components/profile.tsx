import { Pass } from './Pass';
import { Button, Input } from '@/shared/components';
import { RootState, changeData, changePassword } from '@/shared/context';
import { IPass } from '@/shared/lib/IPass';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ShowPass } from './ShowPass';

export const Profile = () => {
  const [isPassChanging, setIsPassChanging] = React.useState(false);
  const [isPhotoChanging, setIsPhotoChanging] = React.useState(false);

  const user = useSelector((state: RootState) => state.user);

  const [passwords, setPasswords] = React.useState<IPass>({
    oldPass: '',
    newPass: '',
    passError: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const dispatch = useDispatch();

  function changePhoto() {
    setIsPhotoChanging((prevState) => !prevState);
  }

  function cancelPassChange() {
    setIsPassChanging(false);
  }

  const inputClass =
    'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  const inputErrorStyle = {
    gridColumn: '1/3',
    color: 'red',
    fontSize: '12px',
    textAlign: 'end' as const,
  };

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
              {...register('imageUrl')}
              placeholder="Вставьте URL"
              className="ml-1 mt-1 flex h-10 w-36 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            if (
              isPassChanging &&
              passwords.oldPass.length !== 0 &&
              passwords.newPass.length !== 0
            ) {
              if (data.password !== passwords.oldPass) {
                setPasswords((prev) => {
                  return { ...prev, passError: true };
                });
              } else {
                dispatch(changePassword(passwords.newPass));
                setIsPassChanging(false);
              }
            }
            if (!isPassChanging) {
              setIsPhotoChanging(false);
              dispatch(changeData(data));
            }
          })}
        >
          <div className="mb-20 flex flex-col gap-4">
            <div className="relative grid grid-cols-[140px_1fr] items-center">
              <span>Почта</span>
              <Input
                {...register('email', {
                  required: 'Поле обязательно для заполнения',
                })}
                className={inputClass}
              />
              <p style={inputErrorStyle}>{errors.email?.message?.toString()}</p>
            </div>
            <div className="relative grid grid-cols-[140px_1fr] items-center">
              <span>Имя</span>
              <Input
                {...register('name', {
                  required: 'Поле обязательно для заполнения',
                })}
                className={inputClass}
              />
              <p style={inputErrorStyle}>{errors.name?.message?.toString()}</p>
            </div>
            <div className="relative grid grid-cols-[140px_1fr] items-center">
              <span>Фамилия</span>
              <Input
                {...register('surname', {
                  required: 'Поле обязательно для заполнения',
                })}
                className={inputClass}
              />
              <p style={inputErrorStyle}>
                {errors.surname?.message?.toString()}
              </p>
            </div>
            {!isPassChanging && (
              <Pass
                setIsPassChanging={setIsPassChanging}
                setPasswords={setPasswords}
              />
            )}
            {isPassChanging && (
              <>
                <ShowPass
                  pass="old"
                  passwords={passwords}
                  setPasswords={setPasswords}
                />
                <ShowPass
                  pass="new"
                  passwords={passwords}
                  setPasswords={setPasswords}
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
          <Button type="submit" className="h-10 w-40 text-sm">
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};
