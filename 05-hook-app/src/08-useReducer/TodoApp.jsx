import { useTodos } from "../hooks"
import { TodoList,TodoAdd } from "./"



// const initialState = [
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del alma',
//     //     done: false
//     // },
//     // {
//     //     id: new Date().getTime() * 3,
//     //     description: 'Recolectar la piedra del tiempo',
//     //     done: false
//     // }
// ];


export const TodoApp = () => {

    const {todos,todosCount,pendingTodosCount, handleDeleteTodo,handleNewTodo,handleToggleTodo}=useTodos();
   
    return (
        <>
            {/* <h1>Todo App: {todos.length}, <small>Pendientes: {todos.filter(todo=>!todo.done).length}</small></h1> */}
            <h1>Todo App: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo}
                        />
                    {/* Fin TodoList */}
                </div>
                <div className="col-5">
                   
                    <h4>Agregar TODO</h4>
                    <hr />
                     {/* TodoAdd onNewTodo(todo) */}
                     {/* {id: new Date()...,description:'',done:false} */}
                    <TodoAdd 
                        onNewTodo={handleNewTodo} 
                        />
                     {/* Fin TodoAdd */}

                </div>
            </div>

        </>
    )
}
