import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    loadUsernameFromStorage: (state) => {
      const username = localStorage.getItem('username');
      if (username) {
        state.username = username;
      }
    },
    logout: (state) => {
      state.username = null;
      localStorage.removeItem('username');
    },
  },
});

export const { setUsername, loadUsernameFromStorage, logout } = userSlice.actions;

export default userSlice.reducer;
