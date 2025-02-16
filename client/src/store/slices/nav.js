import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  navItems: [
    { _id: nanoid(), key: '/', label: 'Home' },
    { _id: nanoid(), key: '/products', label: 'Products' },
    { _id: nanoid(), key: '/contact', label: 'Contact' },
    { _id: nanoid(), key: '/profile', label: 'Profile' },
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
