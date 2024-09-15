import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.logged = true;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
});

// Export the reducer
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
