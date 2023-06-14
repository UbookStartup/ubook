import { Input } from '@/shared/components';
import { IUser } from '@/shared/lib';
import { IPass } from '@/shared/lib/IPass';
import React, { FC } from 'react';

interface IProfileInputProps {
  type: string;
  name: string;
  text: string;
  value: string | number;
  setFormData:
    | React.Dispatch<React.SetStateAction<IUser>>
    | React.Dispatch<React.SetStateAction<IPass>>;
}

export const ProfileInput: FC<IProfileInputProps> = ({
  type,
  name,
  text,
  value,
  setFormData,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData: IUser | IPass) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className="relative grid grid-cols-[140px_1fr] items-center">
      <span>{text}</span>
      <Input
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        autoComplete="on"
      />
    </div>
  );
};
