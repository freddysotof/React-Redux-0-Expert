import { AddCategory } from "../../src/components/AddCategory"
import { fireEvent, render,screen } from "@testing-library/react"
describe('pruebas en <AddCategory/>', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onAddCategory={()=>{}}/>)
        
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target:{value:'Naruto'}})
        
        // screen.debug()

        expect(input.value).toBe('Naruto')
     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue='Naruto';
        //TODO: ??
        const onAddCategory = jest.fn();
        // render(<AddCategory onAddCategory={()=>{}}/>);
        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}});
        // screen.debug();

        fireEvent.submit(form);

        expect(input.value ).toBe('')

        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1)
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);


      })

      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
        const inputValue='N';
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory}/>);

        
        const form = screen.getByRole('form');

        fireEvent.submit(form);


        expect(onAddCategory).toHaveBeenCalledTimes(0);
        expect(onAddCategory).not.toHaveBeenCalled();

       })

       test('No debe de llamar el onNewCategory si el input es menor o igual a 1 caracter', () => { 
        const inputValue='N';
        //TODO: ??
        const onAddCategory = jest.fn();
        // render(<AddCategory onAddCategory={()=>{}}/>);
        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}});
        // screen.debug();

        fireEvent.submit(form);

        expect(onAddCategory).toHaveBeenCalledTimes(0)

       })
 })