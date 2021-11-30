import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import UsersService from '../../services/users.service';

// GetAllUsers reducer action
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (token, thunkAPI) => {
        try {
            const data = await UsersService.getAllUsers(token);
            console.log(data);
            return { usersData: data };
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

// Update validation user status reducer action
export const updateUserStatusById = createAsyncThunk(
    'users/updateUserStatusById',
    async ({ id, body, headers }, thunkAPI) => {
        try {
            const data = await UsersService.updateUserStatusById(id, body, headers);
            console.log(data);
            return { userData: data };
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

// Reducer Initial state
const initialState = {
    fetching: false,
    usersList: [],
    oneUser: {},
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = true;
        },
        [getAllUsers.rejected]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = false;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            // eslint-disable-next-line no-param-reassign
          state.fetching = false;
          // eslint-disable-next-line no-param-reassign
          state.usersList = action.payload.usersData;
        },
        [updateUserStatusById.pending]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = true;
        },
        [updateUserStatusById.rejected]: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.fetching = false;
        },
        [updateUserStatusById.fulfilled]: (state, action) => {
            // eslint-disable-next-line no-param-reassign
          state.fetching = false;
          // eslint-disable-next-line no-param-reassign
          state.oneUser = action.payload.userData;
        },

    },
  });

const { reducer } = usersSlice;
export default reducer;
