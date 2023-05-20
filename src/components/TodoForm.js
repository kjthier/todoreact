import { useState } from 'react'

export default function TodoForm({onSubmit}) {

    // Creates storage for input field string:
    const [newItem, setNewItem] = useState('')

    // Add a todo functionality:
    function handleSubmit(e) {
        e.preventDefault()

        // Check if newItem is empty or not first:
        if (newItem === '') return

        // Call the addTodo fcn to the form, passing in newItem:
        onSubmit(newItem)

        // Clears input field after 'Add' is clicked:
        setNewItem('')
    }
    
    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>Add a task:</label>
                <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)}
                    type='text' 
                    id='item' 
                />
                <button className='btn'>+</button>
            </div>
        </form>
    )
}