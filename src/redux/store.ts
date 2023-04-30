import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sheetsSlice from '../redux/slice';

export const store = configureStore({
  reducer: {
    sheets: sheetsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
