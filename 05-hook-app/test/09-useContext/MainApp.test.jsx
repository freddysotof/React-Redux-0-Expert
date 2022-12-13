import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en <MainApp/>', () => { 
    
    test('debe de mostrar el <HomePage/>', () => { 
        
        render( <MemoryRouter>
           <MainApp/>
          
         </MemoryRouter>);

        expect(screen.getByText("Home Page")).toBeTruthy();

     })

     test('debe de mostrar el <LoginPage/>', () => { 
        
        render( <MemoryRouter initialEntries={['/login']}>
           <MainApp/>
          
         </MemoryRouter>);

        screen.debug()

        expect(screen.getByText("Login Page")).toBeTruthy();

     })
 })