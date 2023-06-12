import { useLocation } from 'react-router-dom';

export function TestPage() {
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col items-center justify-between space-y-3">
      <h1 className="text-2xl font-bold">
        Это тестовая страница :) вот ее путь {location}
      </h1>
    </div>
  );
}
