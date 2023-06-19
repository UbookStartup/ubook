import { Input } from '@/shared/components';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../assets/auth.module.css';
import { useState } from 'react';
import { ViewPassword } from './view-password';

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const navigate = useNavigate();

  const [typePassword, setTypePassword] = useState('password');

  return (
    <div className="mt-28 flex justify-center">
      <div className="flex flex-col">
        <div className="mb-10 flex cursor-pointer gap-20">
          <button
            onClick={() => navigate('/registration')}
            className={isLogin ? 'text-gray-400' : ''}
          >
            Создайте ваш аккаунт
          </button>
          <button
            onClick={() => navigate('/login')}
            className={!isLogin ? 'text-gray-400' : ''}
          >
            Уже есть
          </button>
        </div>
        <div className="flex flex-col items-center gap-5">
          {!isLogin ? (
            <Input type="email" placeholder="Почта" className="border" />
          ) : (
            ''
          )}
          <Input type="text" placeholder="Логин" className="border" />
          <Input type={typePassword} placeholder="Пароль" className="border" />
          <ViewPassword
            typePassword={typePassword}
            setTypePassword={setTypePassword}
            styles={styles}
          />
        </div>
        <button className="rounded border-2 p-2">
          {isLogin ? 'Войти' : 'Создать аккаунт'}
        </button>
      </div>
    </div>
  );
};
