import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  navItems: [
    { _id: nanoid(), name: 'Home' },
    { _id: nanoid(), name: 'Products' },
    { _id: nanoid(), name: 'Contact' },
  ],
  currentItem: 'Home',
  isLoading: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    newCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});
export const { newCurrentItem } = navSlice.actions;
export default navSlice.reducer;
