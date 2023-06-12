import { useLocation } from 'react-router-dom';

export function TestPage() {
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col justify-between space-y-3">
      <h1 className="text-4xl font-medium">{location}</h1>
    </div>
  );
}
