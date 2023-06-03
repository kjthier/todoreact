import React from 'react'

export default function CheckAllBtn({checkTodos}) {
  return (
    <button onClick={() => checkTodos()} className='btn btn-success'>Check All</button>
  )
}
