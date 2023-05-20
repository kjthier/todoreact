import '../styles.scss';


// passing in everything needed from App.js
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className='list-item' >
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
        </li>
    )
}