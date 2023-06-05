import '../styles.scss';


// passing in everything needed from App.js
import {  useState, useRef, useEffect } from 'react'

//export const useMountEffect = (fun) => useEffect(fun, []);

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
    const [newTitle,setNewTitle] =useState(title);
    const [isEditing, setIsEditing] = useState(false);

    

    const handleEditEnter = (e) => {
        e.preventDefault()

        editTodo(id,newTitle);
        setIsEditing(false);        
    }
    
    // const useHandleEditing = () => {
    //     const htmlElRef = useRef(null)
    //     const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    //     //setIsEditing(true);
    //     return [ htmlElRef, setFocus ]                   
    // }
    // const [inputRef, setInputFocus] = useHandleEditing()
    // useMountEffect( setInputFocus );
    return (
        <li className='list-item'>
            {isEditing ? 
            <form className='btn-position' onSubmit={handleEditEnter}>
            <input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} autoFocus/>
            <button type="submit" className='btn btn-secondary'>Save</button>
            </form>
            :
            <div className='btn-position'>
            <div className='testborder'>
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
            </div>
           <div>
            <div className='btn-gap'>
                {/*Edit-button: onClick change editing-status to true, to show edit-inputfield(and hide rest)*/}
                <button onClick={() => {setIsEditing(true); /*setInputFocus(); console.log(inputRef)*/}} className='btn btn-delete btn-info'>Edit</button>
                
                {/* onClick calls deleteTodo(), which deletes the todo per its id which is passed as a parameter. (Note using "onClick=deleteTodo()" would call the function repeatedly after each render since the fcn would be passed to the button through onClick attribute, deleting any todos before they can even be added. As below, it only calls the function when the button is clicked) */}
                <button 
                    onClick={() => deleteTodo(id)} 
                    className='btn btn-delete btn-danger'
                >
                    Delete
                </button>
            </div>
            
            </div>
            </div>
            }
        </li>
    )
}