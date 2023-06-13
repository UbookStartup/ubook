// @ts-nocheck
import React from 'react';
import { Input } from '@/shared/components';

interface FormInterface {
  user: {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    imageUrl: string;
  };
}

interface ProfileInputInterface {
  type: string;
  name: string;
  text: string;
  value: string;
  formData: FormInterface;
  setFormData: (prevState: FormInterface) => FormInterface;
}

export const ProfileInput = ({
  type,
  name,
  text,
  value,
  formData,
  setFormData,
}: ProfileInputInterface) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  return (
    <div
      className="grid grid-cols-[140px_1fr] items-center"
      style={{ position: 'relative' }}
    >
      <span>{text}</span>
      <Input
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        autoComplete="on"
      />
    </div>
  );
};
