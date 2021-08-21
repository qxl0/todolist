import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ToDoFormInRedux from './ToDoFormInRedux';
import TodoInRedux from './TodoInRedux';
import { addTodo, toggleTodo } from './todolistSlice';

export default function TodolistInRedux() {
  const mytodolist = useSelector(state => state.todolist);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Qiang's to do list:</h1>
      <ToDoFormInRedux addtodo={(text) => dispatch(addTodo(text))} />
      {mytodolist.map(todo => {
        return (<TodoInRedux todo={todo} toggleTodo={
          (todo) => dispatch(toggleTodo(todo.id))
          }/>)
      })}
    </div>
  )
}
