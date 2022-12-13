import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import{renderHook,waitFor} from '@testing-library/react';


describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        
        const {result}= renderHook(()=>useFetchGifs('Goku'));
        const {images,isLoading}=result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('debe de retornar un arreglo de imagenes y isLoading en false',async () => { 
        const {result}= renderHook(()=>useFetchGifs('Goku'));

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images,isLoading}=result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
      })
 })