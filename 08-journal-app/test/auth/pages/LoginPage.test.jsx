import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { authSlice } from "../../../src/store/auth"
import { notAuthenticatedState } from "../../fixtures/authFixtures"

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({email,password})
    }
}));

jest.mock('react-redux', (ns) => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}));
const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})


describe('Pruebas en el <LoginPage/>', () => {

    beforeEach(() => jest.clearAllMocks())

    // test('debe de mostrar el component correctamente', () => {

    //     render(
    //         <Provider store={store}>
    //             <MemoryRouter>
    //                 <LoginPage />
    //             </MemoryRouter>

    //         </Provider>
    //     )


    //     expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1)

    // })

    // test('Boton de Google debe de llamar el startGoogleSignIn ', () => {

    //     render(
    //         <Provider store={store}>
    //             <MemoryRouter>
    //                 <LoginPage />
    //             </MemoryRouter>

    //         </Provider>
    //     )

    //     const button = screen.getByLabelText('google-btn');
    //     fireEvent.click(button);
    //     expect(mockStartGoogleSignIn).toHaveBeenCalled();
    // })

    test('submit debe de llamar startLoginWithEmailPassword', () => {

        const email = 'fsoto@elcatador.com';
        const password = '123456';
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>

            </Provider>
        )
        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } })

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } })

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm)

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email,
            password
        });


    })
}) 