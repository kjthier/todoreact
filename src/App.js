import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ClearAllBtn from './components/ClearAllBtn';
import CheckAllBtn from './components/CheckAllBtn'
import UnCheckAllBtn from './components/UnCheckAllBtn';
import Header from './components/Header.js';
   
export default function App() {

  // Creates stored array for todos on the list:
  const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem('ITEMS')
      if (localValue == null) return []
      // otherwise, parse what is inside local storage and return that as the localValue
      return JSON.parse(localValue)
  })

  const [renderAllBtn, setRenderAllBtn] = useState(false)

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
  //-------------------Check all todos-------------------------
  const checkTodos = () => {
    setTodos(prev => {
    return prev.map((item) => {
            if (item.completed === false) {
                //console.log(item);
                item.completed = true;
            }
            return item;
        })
    })
}
//---------------UN-check all todos---------------------
const unCheckAll = () => {
    setTodos(prev => {
        return prev.map(item => {
            if (item.completed === true){
                item.completed = false;
            }
        return item;
        })
    })
}

  // Deletes todos from the list - if todo id is not equal to the id of the task being deleted, keep it, otherwise delete:
  function deleteTodo(id) {
      setTodos(currentTodos => {
          return currentTodos.filter(todo => todo.id !== id)
      })
  }
  //----------------Edit-function------------------
  function editTodo(id,title){
    setTodos(currentTodos =>
      currentTodos.map((item) => {
        if (id === item.id){
          item.title = title;
        }
        return item;
    }));
  }
  //----------- Clear all todos from list:-------------
  function clearTodos() {
      setTodos([])
  }

  //---------- funcs to render the general-buttons only if nessesary--------
  function displayCheckAllBtn(todos) {
    const renderCheck = true;
    const renderUncheck = true;
    const renderDelete = true;
  }
  return (
      <>
      <Header />
          {/* (How props work: When adding props, call them here the same name as in the fcn signature - in this case, 'NewTodoForm({onSubmit})'). The addTodo() is then called as it exists on this file and not in NewTodoForm. Props exist in the child component while the functions of the props are in this parent file. */}
          <div className='centerContent'>
          <h1 className='header'>Today's Tasks</h1>
          <TodoForm onSubmit={addTodo} />
          </div>
          <TodoList 
              todos={todos} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
              clearTodos={clearTodos}
              editTodo={editTodo} />
        
        
        <div className='all-btns'>
            <CheckAllBtn 
                checkTodos= {checkTodos}
            />
            <UnCheckAllBtn
                unCheckAll={unCheckAll}
            />
            <ClearAllBtn
                todos={todos} 
                clearTodos={clearTodos} 
            />
        </div>
        
      </>
  )
}

// use state to move checked todos to the bottom of the list
// add clear all checked button
// add edit fcn -done
// add nav
// add footer
