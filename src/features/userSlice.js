import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    //  set user to payload
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      // sets user to null
      state.user = null
    }
  },
});

export const {login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
