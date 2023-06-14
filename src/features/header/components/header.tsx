import { useSwitchTheme } from '../hooks/useSwitchTheme';
import { Button, Input } from '@/shared/components';
import { Moon, Sun } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [, toggleTheme] = useSwitchTheme();
  const location = useLocation().pathname;
  return (
    <div className="flex h-20 shrink-0 items-center justify-between">
      {/* Left part */}
      <div className="flex w-full items-center">
        <p className="mr-1 w-1/6 select-none text-2xl font-semibold first-letter:font-bold first-letter:text-violet-600">
          Ubook
        </p>
        {!(location === '/login') && (
          <Input
            className="max-w-xl rounded-none border-b border-input"
            placeholder="Введите название или автора..."
          />
        )}
      </div>
      {/* Right part */}
      <div className="flex items-center">
        <Button variant="outline" className="w-10 p-0" onClick={toggleTheme}>
          {localStorage.theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
};
