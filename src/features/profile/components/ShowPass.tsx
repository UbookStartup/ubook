import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/shared/components';
import React from 'react';

interface PasswordsType {
  oldPass: string;
  newPass: string;
  passError: boolean;
}

interface ShowPassType {
  passwords: PasswordsType;
  setPasswords: React.Dispatch<React.SetStateAction<PasswordsType>>;
  pass: string;
}

export const ShowPass = ({ passwords, setPasswords, pass }: ShowPassType) => {
  const [isPasswordType, setIsPasswordType] = React.useState(true);

  function showPassword() {
    setIsPasswordType((prev) => !prev);
  }

  const inputClass =
    'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  const eyeStyles = {
    cursor: 'pointer',
    position: 'absolute' as const,
    right: '10px',
    top: '12px',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="relative grid grid-cols-[140px_1fr] items-center">
        <span>{pass === 'old' ? 'Старый пароль' : 'Новый пароль'}</span>
        <Input
          type={isPasswordType ? 'password' : 'text'}
          name={pass === 'old' ? 'oldPass' : 'newPass'}
          value={pass === 'old' ? passwords.oldPass : passwords.newPass}
          onChange={(event) =>
            setPasswords((prev) => {
              return {
                ...prev,
                oldPass: pass === 'old' ? event.target.value : prev.oldPass,
                newPass: pass === 'new' ? event.target.value : prev.newPass,
              };
            })
          }
          className={inputClass}
        />
      </div>
      {isPasswordType ? (
        <Eye style={eyeStyles} size={16} onClick={showPassword} />
      ) : (
        <EyeOff style={eyeStyles} size={16} onClick={showPassword} />
      )}
    </div>
  );
};
