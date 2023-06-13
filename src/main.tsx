// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './features/router';
import '@/assets/global.css';
import user from './shared/state/user';

const store = configureStore({
  reducer: combineReducers({
    user: user.reducer,
  }),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
