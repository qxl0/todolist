import React, { useState } from 'react'
import data from './data.json';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function TodoList() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((todo) => {
      if (todo.id === Number(id)) { 
        console.log("set task ", todo.id);
        return { ...todo, complete: !todo.complete }
      } else { 
        return {...todo};
      }
    });
    setToDoList(mapped);
  };
  const handleClearTasks = (event) => {
    event.preventDefault();

    // clear all tasks
    let cleared = toDoList.filter((todo) => {
      return todo.complete === false
    });
    setToDoList(cleared);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {
      id: copy.length + 1,
      task: userInput,
      complete: false
    }];
    setToDoList(copy);
  };

  return (
    <div>
      <h2>Qiang's To do list:</h2>
      <ToDoForm addTask={addTask} />
      <button onClick={handleClearTasks}>Clear Completed</button>
      {toDoList.map(todo => {
        return ( <ToDo todo={todo} handleToggle={handleToggle}/> );
      })}
    </div>
  )
}
