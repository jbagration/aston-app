import { createSlice } from '@reduxjs/toolkit';

const initialUserState = { email: null };

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      if (action.payload?.error) {
        return initialUserState;
      } else {
        state.email = action.payload;
      }
    },

    signup(state, action) {
      if (action.payload?.error) {
        return initialUserState;
      } else {
        state.email = action.payload;
      }
    },

    logout() {
      return initialUserState;
    },

    getSavedUser(state, action) {
      return action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

