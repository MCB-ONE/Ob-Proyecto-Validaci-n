import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import AuthService from '../../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } catch (error) {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload.user;
    },
    // eslint-disable-next-line no-unused-vars
    [login.rejected]: (state, action) => {
        // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
    // eslint-disable-next-line no-unused-vars
    [logout.fulfilled]: (state, action) => {
        // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
