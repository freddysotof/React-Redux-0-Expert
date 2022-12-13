import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => {

    test('debe de retornar el estado inicial', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false })

    })


    test('debe de (login) llamar el login, autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: "Freddy",
                id: '123'
            }
        };
        const state = authReducer({ logged: false, }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })


    })


    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.login,
            payload: {
                name: "Freddy",
                id: '123'
            }
        };
        const state = authReducer({ logged: false, }, action);

        const deleteAction = {
            type: types.logout,
            payload: '123'
        };

        const newState = authReducer(state, deleteAction);


        expect(newState).toEqual({
            logged: false
        })

    })
})