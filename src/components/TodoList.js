import { TodoItem } from "./TodoItem.js"
import '../styles.scss';


export default function TodoList({ todos, toggleTodo, deleteTodo, clearTodos,editTodo }) {
    return (
        <ul className='list'>
            {/* renders text if todo list is empty (called short circuiting) */}
            {todos.length === 0 &&  'All done? Then it is time to pet your pet!'}

            {/* /* returns an array (an 'li' element) with unique identifier ('key') */}
            {todos.map(todo => {
                return (
                    // '...todo' passes all of the props from TodoItem: 'id={todo.id} completed={todo.completed} title={todo.title}'
                    <TodoItem 
                        {...todo} 
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo} 
                        clearTodos={clearTodos}
                        editTodo={editTodo}
                    />
                )
            })}  
        </ul>
    )
}