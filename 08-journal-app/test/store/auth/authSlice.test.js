import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('Pruebas en el Auth Slice', () => {

    test('Debe de regresar el estado inicial y llamarse auth Slice', () => {

        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(state)

    })

    test('Debe de realizar la autentication', () => {
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).not.toEqual(initialState)

    })

    test('Debe de realizar la autentication', () => {
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).not.toEqual(initialState)

    })

    test('Debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })


    })

    test('Debe de realizar el logout', () => {
        const errorMessage="Credenciales incorrectas"
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));
        expect(state.errorMessage).toBe(errorMessage)
       
    })

    test('Debe de cambiar el estado a checking', () => {
        const state = authSlice.reducer(initialState, checkingCredentials());
        expect(state.status).toBe('checking')
       
    })
})