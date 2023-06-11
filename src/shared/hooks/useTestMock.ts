/* eslint-disable react-hooks/exhaustive-deps */
import { API_URL } from '../lib';
import { useEffect } from 'react';

export const useTestMock = (setter: React.Dispatch<any>) => {
  useEffect(() => {
    fetch(`${API_URL}/books`)
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .then((data) => {
        setter(data);
      });
  }, []);
};
