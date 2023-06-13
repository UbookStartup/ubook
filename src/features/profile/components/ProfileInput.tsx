import React from 'react';
import { Input } from '@/shared/components';

interface ProfileInputInterface {
  type: string;
  text: string;
  value: string;
}

export const ProfileInput = ({ type, text, value }: ProfileInputInterface) => {
  const [data, setData] = React.useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData(event?.target.value);
  }

  return (
    <div
      className="grid grid-cols-[140px_1fr] items-center"
      style={{ position: 'relative' }}
    >
      <span>{text}</span>
      <Input type={type} value={data} onChange={handleChange} />
    </div>
  );
};
