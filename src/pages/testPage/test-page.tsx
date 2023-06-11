import { Button } from '@/shared/components';
import { useTestMock } from '@/shared/hooks';
import { useState } from 'react';

export function TestPage() {
  const [count, setCount] = useState<any[]>([]);

  useTestMock(setCount);

  return (
    <div className="flex flex-col items-center justify-between space-y-3">
      <h1 className="text-2xl font-bold">Boilerplate setup</h1>
      <Button onClick={() => console.log(count[1].title)}>
        count is {count.length}
      </Button>
    </div>
  );
}
