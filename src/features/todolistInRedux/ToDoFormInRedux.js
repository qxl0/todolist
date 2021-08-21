import React from 'react'

export default function ToDoFormInRedux({addtodo}) {
  const [userInput, setUserInput] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addtodo(userInput)
    setUserInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  )
}
