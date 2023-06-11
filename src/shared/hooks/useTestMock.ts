import { API_URL } from '../lib';
import { useEffect } from 'react';

export const useTestMock = () => {
  useEffect(() => {
    fetch(`${API_URL}/books`)
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .then((data) => console.log(data));
  }, []);
};
