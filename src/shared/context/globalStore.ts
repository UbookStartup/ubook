import { globalApi } from '../services/globalApi';
import { user } from './userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: combineReducers({
    user: user.reducer,
    [globalApi.reducerPath]: globalApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
