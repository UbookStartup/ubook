export const convertDate = (date: EpochTimeStamp) => {
  const dateObj = new Date(date * 1000);
  return dateObj.toISOString().split('T')[0];
};
