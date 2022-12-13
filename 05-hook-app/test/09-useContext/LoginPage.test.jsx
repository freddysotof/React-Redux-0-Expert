import { fireEvent, render, screen } from "@testing-library/react"
import { useContext } from "react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en <LoginPage />', () => {



    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>

        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        screen.debug()
    })
    
    const mockSetUser = jest.fn();
    beforeEach(()=>jest.clearAllMocks())
    test('debe de llamar el set user cuando se hace click en el boton', () => {

  

        render(
            <UserContext.Provider value={{user:null,setUser:mockSetUser}}>
                <LoginPage />
            </UserContext.Provider>

        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(mockSetUser).toHaveBeenCalledWith({"email": "fsoto@elcatador.com", "id": 123, "name": "Freddy"} );

        screen.debug()
    })

 
    
})