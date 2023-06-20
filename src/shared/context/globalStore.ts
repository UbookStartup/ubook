import { books } from '@/features/books';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { globalApi } from '../services/globalApi';
import { user } from './userSlice';

const rootReducer = combineReducers({
  user: user.reducer,
  books: books.reducer,
  [globalApi.reducerPath]: globalApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
