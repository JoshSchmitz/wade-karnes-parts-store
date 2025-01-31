import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  isOpen: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    clearCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    handleOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, handleOpen } =
  authSlice.actions;
export default authSlice.reducer;
