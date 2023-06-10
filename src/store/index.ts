import { configureStore } from '@reduxjs/toolkit';

import saveUserData from '../helpers/saveUserData';
import historyReducer from './history-slice';
import favouritesReducer from './favourites-slice';
import userReducer from './user-slice';
import getUserData from '../helpers/getUserData';
import { apiSlice } from './api-slice';

const preloadedState = getUserData();

const store = configureStore({
  reducer: {
    history: historyReducer,
    favourites: favouritesReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveUserData as any, apiSlice.middleware), 
  preloadedState,
});

export default store;
