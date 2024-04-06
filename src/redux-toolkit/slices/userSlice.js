import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectLoggedInUser = (state) => state.user.loggedInUser;

export default userSlice.reducer;
