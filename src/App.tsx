import { useState } from 'react';

export function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex flex-col items-center justify-between space-y-3">
      <h1 className="text-2xl font-bold">Boilerplate setup</h1>
      <button
        className="rounded-xl bg-red-300 px-5 py-3"
        onClick={() => setCount((already) => already + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}
