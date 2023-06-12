import { useEffect, useState } from 'react';

export const useSwitchTheme = () => {
  const [theme, setTheme] = useState<string | null>(localStorage.theme);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(
      theme === 'dark'
        ? (localStorage.theme = 'light')
        : (localStorage.theme = 'dark')
    );
  };

  return [theme, handleThemeSwitch] as const;
};
