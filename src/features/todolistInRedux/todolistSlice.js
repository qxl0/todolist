import { createSlice } from '@reduxjs/toolkit';

var counter = 3;
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    filter: 'all',
    list: [
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
  ]},
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      return {...state, list: [...state.list, {
        id: counter++,
        task: action.payload,
        completed: false
      }] };
    },
    removeTodo: (state, action) => {
      return {...state, 
              list: state.list.filter((todo) => todo.id !== action.payload)
        };
    },
    toggleTodo: (state, action) => {
      return {...state, list:state.list.map(
        todo => (todo.id === action.payload)? { ...todo, completed: !todo.completed } : todo)
      }
    },
    setFilter: (state, action) => {
      return {...state, filter: action.payload};
    }
  }});

export const todolist = (state) => state.todolist.list;
export const { addTodo, removeTodo, toggleTodo, setFilter  } = todolistSlice.actions;
export default todolistSlice.reducer;