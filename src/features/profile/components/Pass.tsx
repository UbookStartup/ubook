interface PassInterface {
  setIsPassChanging: (state: boolean) => void;
}

export const Pass = ({ setIsPassChanging }: PassInterface) => {
  function changePassword() {
    setIsPassChanging(true);
  }

  return (
    <div
      className="grid grid-cols-[140px_1fr] items-center"
      style={{ position: 'relative' }}
    >
      <span>Пароль</span>
      <span className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        ••••••
      </span>
      <button
        style={{
          position: 'absolute',
          right: '10px',
          fontSize: '12px',
        }}
        onClick={changePassword}
      >
        🖊️
      </button>
    </div>
  );
};
