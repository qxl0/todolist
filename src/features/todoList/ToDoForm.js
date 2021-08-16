import React from 'react'

const ToDoForm = ({addTask}) => {
  const [userInput, setUserInput] = React.useState('');

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTask(userInput);
    setUserInput('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        value={userInput} 
        onChange={handleChange}
        placeholder="What needs to be done?" />
      <button type="submit" >Add to do</button>
    </form>
  )
}

export default ToDoForm
