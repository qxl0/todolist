import React from 'react'

export default function TodolistFilterInRedux({filter, currentFilter}) {
  return (
    <div>
      <button disabled = { currentFilter === 'all'} 
              onClick={()=>filter('all')}>All</button>
      <button disabled = { currentFilter === 'active'} 
              onClick={()=>filter('active')}>Active</button>
      <button disabled = { currentFilter === 'completed'} 
              onClick={()=>filter('completed')}>Completed</button>
    </div>
  )
}
