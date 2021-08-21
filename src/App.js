import React from 'react';
import { Counter } from './features/counter/Counter';
import TodoList from './features/todoList/TodoList';
import './App.css';
import TodolistInRedux from './features/todolistInRedux/TodolistInRedux';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <TodoList />  */}
        <TodolistInRedux />
    </div>
  );
}

export default App;
