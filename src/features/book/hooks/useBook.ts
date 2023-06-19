import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../service/book.api';

export const useBook = () => {
  const { bookId } = useParams();

  const data = useGetBookByIdQuery(Number(bookId), {
    refetchOnMountOrArgChange: true,
  });
  return data;
};
