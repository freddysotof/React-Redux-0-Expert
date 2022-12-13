import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { PrivateRoute } from "../../../src/router/PrivateRoute"
import { Navbar } from "../../../src/ui/components/Navbar"


const mockedUseNavigate= jest.fn();
jest.mock("react-router-dom",()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}));

describe('Pruebas en el <Navbar/>', () => {
      
    const contextValue = {
        logged: true,
        user: {
            username: 'fsoto',
            id: 'abc'
        },
        login: jest.fn(),
        logout: jest.fn()
    }
    beforeEach(() => jest.clearAllMocks());
    test('debe de mostrar el nombre del usuario', () => {

 

    
        render(
            <MemoryRouter >
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        )
        // screen.debug();

        expect(screen.getByText('fsoto')).toBeTruthy();

    })

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {

 

    
        render(
            <MemoryRouter >
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login",{"replace":true});

    })
})