export default function ClearAllBtn({ todos, clearTodos }) {
    return (
        <button
              onClick={() => {
                if (todos.length > 0 && window.confirm('Are you sure you want to remove all tasks from this list?')) { 
                  clearTodos()
              }
              }}
              className='btn btn-danger'
          >
              Clear All
          </button>
    )
}