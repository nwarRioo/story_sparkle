import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isAuth = true;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.username = null;
      state.errorMessage = null;
      state.isAuth = false;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearError: (state) => {
        state.errorMessage = null;
    }
  },
});

export const { login, logout, setError, clearError } = authSlice.actions;
export default authSlice;