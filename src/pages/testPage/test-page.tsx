import { Button } from '@/shared/components';
import { useTestMock } from '@/shared/hooks';
import { useState } from 'react';

export function TestPage() {
  const [count, setCount] = useState<number>(0);

  useTestMock();

  return (
    <div className="flex flex-col items-center justify-between space-y-3">
      <h1 className="text-2xl font-bold">Boilerplate setup</h1>
      <Button onClick={() => setCount((already) => already + 1)}>
        count is {count}
      </Button>
    </div>
  );
}
