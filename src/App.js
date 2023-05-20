import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ClearAllBtn from './components/ClearAllBtn';

   
export default function App() {

  // Creates stored array for todos on the list:
  const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem('ITEMS')
      if (localValue == null) return []
      // otherwise, parse what is inside local storage and return that as the localValue
      return JSON.parse(localValue)
  })

  // Create local storage functionality - ie "run this function (take the todos and storing them inside local storage) every time the objects inside the 2nd property of the array [todos] change". This stores data in local storage, but doesn't 'get' it from local storage - that is the fcn called in useState, above.
  useEffect(() => {
      localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  // Adds todos to the list:
  function addTodo(title) {
      setTodos((currentTodos) => {
          return [
              ...currentTodos,
              {id: crypto.randomUUID(), title, completed: false},
          ]
      })
  }

  // Toggles checked on tasks in list, takes parameters 'id' and whether or not it's completed:
  function toggleTodo(id, completed) {
      setTodos(currentTodos => {
          return currentTodos.map(todo => {
              if (todo.id === id) {
                  return { ...todo, completed }
              }
              // if todo doesn't match id, returns todo without a change
              return todo
          })
      })
  }

  // Deletes todos from the list - if todo id is not equal to the id of the task being deleted, keep it, otherwise delete:
  function deleteTodo(id) {
      setTodos(currentTodos => {
          return currentTodos.filter(todo => todo.id !== id)
      })
  }

  // Clear all todos from list:
  function clearTodos() {
      setTodos([])
  }

  return (
      <>
          {/* (How props work: When adding props, call them here the same name as in the fcn signature - in this case, 'NewTodoForm({onSubmit})'). The addTodo() is then called as it exists on this file and not in NewTodoForm. Props exist in the child component while the functions of the props are in this parent file. */}
          <h1 className='header'>Today's Tasks</h1>
          <TodoForm onSubmit={addTodo} />
          <TodoList 
              todos={todos} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
              clearTodos={clearTodos} />
          <ClearAllBtn
            todos={todos} 
            clearTodos={clearTodos} 
          />
      </>
  )
}

// use state to move checked todos to the bottom of the list
// add clear all checked button
// add edit fcn
// add nav
// add footer
