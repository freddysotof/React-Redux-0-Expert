import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { SearchPage } from "../../../src/heroes"


const mockedUseNavigate= jest.fn();
jest.mock("react-router-dom",()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}));
describe('Pruebas en <SearchPage/>', () => {
    beforeEach(()=>jest.clearAllMocks())

    test('debe de mostrarse correctamente con valores por defecto', () => {


        const { container } = render(

            <MemoryRouter>
                {/* <AuthContext.Provider></AuthContext.AuthContext.Provider> */}
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        //    screen.debug();
    })

    test('debe de mostrarse a Batman y el input con el valor del query string', () => {


        const { container } = render(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                {/* <AuthContext.Provider></AuthContext.AuthContext.Provider> */}
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('dc-batman');

        const alertSearch = screen.getByLabelText('alert-danger');
        expect(alertSearch.style.display).toBe('none')
    })

    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        render(

            <MemoryRouter initialEntries={['/search?q=batman123']}>
                {/* <AuthContext.Provider></AuthContext.AuthContext.Provider> */}
                <SearchPage />
            </MemoryRouter>
        )
        // screen.debug();
        const alertSearch = screen.getByLabelText('alert-danger');
        expect(alertSearch.style.display).toBe('')

    })

    test('debe de llamar el navigate a la pantalla nueva', () => {
        render(

            <MemoryRouter initialEntries={['/search']}>
                {/* <AuthContext.Provider></AuthContext.AuthContext.Provider> */}
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } })
        const form = screen.getByLabelText('form')
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=superman`);
    });


})