import PropTypes from 'prop-types'
export const TodoItem = ({ todo, onDeleteTodo,onToggleTodo}) => {


    return (
        <>
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span
                    aria-label='span'
                    className={`align-self-center ${(todo.done) ? 'text-decoration-line-through':''}`}
                    onDoubleClick={()=>onToggleTodo(todo.id)}
                >
                    {todo.description}

                </span>
                <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                >Borrar</button>
            </li>
        </>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
}