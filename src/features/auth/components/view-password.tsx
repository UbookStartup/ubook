import { Eye, EyeOff } from 'lucide-react';

export const ViewPassword = ({ typePassword, setTypePassword, styles }) => {
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
