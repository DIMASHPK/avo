import { configureStore } from '@reduxjs/toolkit';
import people from './PeopleSlice';

export const store = configureStore({
  reducer: {
    people,
  },
});