import { createSlice } from '@reduxjs/toolkit';

var counter = 3;
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: [
    {
      id: 1,
      task: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      task: 'Learn Redux',
      completed: false,
    }
  ],
  reducers: {
    addTodo: (state, action) => {
      debugger;
      console.log(action);
      return [...state, {
        id: counter++,
        task: action.payload,
        completed: false
      }];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
  }
});

export const todolist = (state) => state.todolist;
export const { addTodo, removeTodo, toggleTodo } = todolistSlice.actions;
export default todolistSlice.reducer;