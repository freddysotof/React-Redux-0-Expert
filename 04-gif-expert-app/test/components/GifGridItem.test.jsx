import { render,screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en <GifGridItem />',()=>{
    const title='Saitama'
    const url='https://google.com/';


    test('debe hacer match con snapshot', () => { 

        const {container}=    render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar la image con el url y el alt indicado', () => { 
        
        render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        const {src,alt }=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
      })

      test('debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

       })
})