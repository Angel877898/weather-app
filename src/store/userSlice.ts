import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    loadUsernameFromStorage(state) {
      const username = localStorage.getItem('username');
      if (username) {
        state.username = username;
      }
    },
  },
});

export const { setUsername, loadUsernameFromStorage } = userSlice.actions;
export default userSlice.reducer;
