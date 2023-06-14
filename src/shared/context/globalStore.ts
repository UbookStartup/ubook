import { user } from './userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: combineReducers({
    user: user.reducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
