import '../styles.scss';


// passing in everything needed from App.js
import {  useState } from 'react'
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
    const [newTitle,setNewTitle] =useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditEnter = (e) => {
        if(e.key === 'Enter')
        { 
            editTodo(id,newTitle);
            setIsEditing(false);
        }
    }

    return (
        <li className='list-item'>
            {isEditing ? 
            <input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} onKeyUp={handleEditEnter}></input>
            :
            <div>
            <label>
                {/* toggle checked on click, marked completed when checked */}
                <input 
                    type='checkbox' 
                    checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)} 
                    className='checkbox'
                />
                <span className={completed ? 'completed': ''}>{title}</span>
            </label>
            {/* onClick calls deleteTodo(), which deletes the todo per its id which is passed as a parameter. (Note using "onClick=deleteTodo()" would call the function repeatedly after each render since the fcn would be passed to the button through onClick attribute, deleting any todos before they can even be added. As below, it only calls the function when the button is clicked) */}
            <button 
                onClick={() => deleteTodo(id)} 
                className='btn btn-delete'
            >
                Delete
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
}
        </li>
    )
}