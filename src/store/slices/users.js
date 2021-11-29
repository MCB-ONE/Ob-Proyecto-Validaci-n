import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import UsersService from '../../services/users.service';

export const getAllUsers = createAsyncThunk(
    'users',
    async ({ token }, thunkAPI) => {
        try {
            const data = await UsersService.getAllUsers(token);
            return { users: data };
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

const initialState = {
    fetching: false,
    // eslint-disable-next-line no-undef
    usersList: {},
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = true;
            // eslint-disable-next-line no-param-reassign
            state.usersList = null;
        },
        [getAllUsers.rejected]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = false;
            // eslint-disable-next-line no-param-reassign
            state.usersList = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            // eslint-disable-next-line no-param-reassign
          state.fetching = false;
          // eslint-disable-next-line no-param-reassign
          state.usersList = action.paload.users;
        },

    },
  });

const { reducer } = usersSlice;
export default reducer;
