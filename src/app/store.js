import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../features/todolistInRedux/todolistSlice';

export const store = configureStore({ 
    reducer: {
      todolist: todolistReducer
    }
});
