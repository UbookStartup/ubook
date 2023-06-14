import { IUser } from '../lib';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
  id: 1,
  name: 'Кирилл',
  surname: 'Черных',
  email: 'mail@chernix.com',
  password: '123456',
  imageUrl:
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        name: action.payload.name || state.name,
        surname: action.payload.surname || state.surname,
        email: action.payload.email || state.email,
        imageUrl: action.payload.imageUrl || state.imageUrl,
        password: action.payload.password || state.password,
      };
    },
  },
});

export const { changeData } = user.actions;
