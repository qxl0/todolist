import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ToDoFormInRedux from './ToDoFormInRedux';
import TodoInRedux from './TodoInRedux';
import TodolistFilterInRedux from './TodolistFilterInRedux';
import { addTodo, toggleTodo, setFilter } from './todolistSlice';

export default function TodolistInRedux() {
  const currentFilter = useSelector(state => state.todolist.filter); 
  const mytodolist = useSelector(state => {
    console.log("state is", state);
    return state.todolist.list
  });
  const todolistpostfilter = mytodolist.filter(todo => 
    { if (currentFilter === "all") return true;
      if (currentFilter === "active") return !todo.completed;
      if (currentFilter === "completed") return todo.completed;
      return true;
    });
  const dispatch = useDispatch();

  
  const handleAddtodo = (text) => {
    dispatch(addTodo(text));
  }

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo(todo.id));
  }

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  }

  return (
    <div>
      <h1>Qiang's to do list:</h1>
      <ToDoFormInRedux addtodo={handleAddtodo} />
      {todolistpostfilter.map(todo => {
        return (<TodoInRedux 
                    key={todo.id}
                    todo={todo} 
                    toggleTodo={handleToggleTodo} 
          />)
      })}
      <TodolistFilterInRedux filter={handleFilter} currentFilter={currentFilter} />
    </div>
  )
}
