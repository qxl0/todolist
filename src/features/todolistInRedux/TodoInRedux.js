import React from 'react'

export default function TodoInRedux({todo, toggleTodo}) {
  const handleClick = (e) => {
    e.preventDefault();
    toggleTodo(todo);
  }
  return (
    <div key={todo.id}
      onClick={handleClick}
      style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
      }}> 
    {todo.task}
    </div>
  )
}
