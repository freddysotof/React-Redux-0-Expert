import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {


    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('debe de mostrar el Todo Pendiente de completar', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')


        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')

    })

    test('debe de mostrar el Todo  completado', () => {
        todo.done=true;
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')

        screen.debug();
    })


    test('span debe de llamar el OnToggleTodo cuando se hace clikc', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.doubleClick(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })


    test('button debe de llamar el onDeleteTodo cuando se hace clikc', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        screen.debug();
    })
})