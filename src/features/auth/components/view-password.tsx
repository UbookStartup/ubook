import { Eye, EyeOff } from 'lucide-react';

interface IViewPassword {
  typePassword: string;
  setTypePassword: React.Dispatch<React.SetStateAction<string>>;
  styles: CSSModuleClasses;
}

export const ViewPassword = ({
  typePassword,
  setTypePassword,
  styles,
}: IViewPassword) => {
  const changeTypePassword = (type: string) => {
    setTypePassword(type);
  };

  return (
    <div>
      {typePassword === 'password' ? (
        <Eye
          onClick={() => changeTypePassword('text')}
          className={styles.eye}
        />
      ) : (
        <EyeOff
          onClick={() => changeTypePassword('password')}
          className={styles.eye}
        />
      )}
    </div>
  );
};
