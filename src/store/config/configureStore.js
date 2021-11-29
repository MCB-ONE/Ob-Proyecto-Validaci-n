import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';
import usersReducers from '../slices/users';

// Reducers combination
const reducer = {
    auth: authReducer,
    message: messageReducer,
    users: usersReducers,
  };

/** Store configuration, combine all app states */
const store = configureStore({
    reducer,
    devTools: true,
  });

  export default store;
