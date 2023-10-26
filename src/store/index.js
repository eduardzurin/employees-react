import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeSlice from './slices/employeeSlice';
import thunk from 'redux-thunk'; 

const middleware = [...getDefaultMiddleware(), thunk];

export default configureStore({
  reducer: {
    users: employeeSlice,
  },
  middleware, 
});