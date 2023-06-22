export const convertDate = (
  date: EpochTimeStamp | undefined
): string | null => {
  if (!date) return null;
  const dateObj = new Date(date * 1000);
  return dateObj.toISOString().split('T')[0];
};
