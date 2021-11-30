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

            // Find admin user and delete from the data to set to the state
            const isAdmin = data.find((element) => {
                element.roles.forEach((role) => {
                    if (role.name === 'ADMIN') {
                        return element;
                    }
                    return element;
                  });
                  return element;
              });
            const filteredData = data.filter((user) => {
                return user.id !== isAdmin.id;
            });
            console.log(filteredData);
            return { usersData: filteredData };
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

    },
  });

const { reducer } = usersSlice;
export default reducer;
