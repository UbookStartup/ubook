import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../lib/interfaces/IBook';

const initialState: IBook[] = [];

export const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      action.payload.forEach((e) => {
        if (!state.some((elem) => elem.id === e.id)) state.push(e);
      });
    },
  },
});

export const { setBooks } = books.actions;
