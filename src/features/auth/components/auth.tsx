import { Input } from '@/shared/components';
import { useLocation, useNavigate } from 'react-router-dom';

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex justify-center">
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
        <div className="mb-20 flex flex-col items-center gap-5">
          {!isLogin ? (
            <Input type="email" placeholder="Почта" className="w-64 border" />
          ) : (
            ''
          )}
          <Input type="text" placeholder="Логин" className="w-64 border" />
          <Input type="password" placeholder="Пароль" className="w-64 border" />
        </div>
        <button className="rounded border-2 p-2">
          {isLogin ? 'Войти' : 'Создать аккаунт'}
        </button>
      </div>
    </div>
  );
};
