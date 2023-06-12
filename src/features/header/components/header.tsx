import { useSwitchTheme } from '../hooks/useSwitchTheme';
import { Button, Input } from '@/shared/components';
import { Moon, Sun } from 'lucide-react';

export const Header = () => {
  const [, toggleTheme] = useSwitchTheme();
  return (
    <div className="flex h-20 shrink-0 items-center justify-between">
      {/* Left part */}
      <div className="flex w-full items-center">
        <p className="mr-1 w-1/6 text-2xl font-semibold first-letter:font-bold first-letter:text-violet-600">
          Ubook
        </p>
        <Input
          className="max-w-xl outline-none"
          placeholder="Введите название или автора..."
        />
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
