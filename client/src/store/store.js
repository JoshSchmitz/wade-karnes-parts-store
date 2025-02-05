import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api';
import navReducer from './slices/nav';
import authReducer from './slices/auth/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
