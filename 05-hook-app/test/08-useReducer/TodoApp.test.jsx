import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";


jest.mock('../../src/hooks/useTodos');
describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos:[{
            id: 1,
            description: 'Piedra del Alma',
            done: false
        },
        {
            id: 2,
            description: 'Piedra del Poder',
            done: true
        }],
        todosCount:2,
        pendingTodosCount:1,
        handleDeleteTodo:jest.fn(),
        handleNewTodo:jest.fn(),
        handleToggleTodo:jest.fn()
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);
        
        expect(screen.getByText('Piedra del Alma')).toBeTruthy();
        expect(screen.getByText('Piedra del Poder')).toBeTruthy();
        expect(screen.getByRole('textbox').name).toBe('description');
        screen.debug();

    })

})