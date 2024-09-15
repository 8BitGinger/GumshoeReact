import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice'; // Assuming authSlice.js exports the reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
