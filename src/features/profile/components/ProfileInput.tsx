import { Input } from '@/shared/components';
import { IUser } from '@/shared/lib';
import React, { FC } from 'react';

interface IProfileInputProps {
  type: string;
  name: string;
  text: string;
  value: string | number;
  setFormData: React.Dispatch<React.SetStateAction<IUser>>;
}

export const ProfileInput: FC<IProfileInputProps> = ({
  type,
  name,
  text,
  value,
  setFormData,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="relative grid grid-cols-[140px_1fr] items-center">
      <span>{text}</span>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        autoComplete="on"
      />
    </div>
  );
};
