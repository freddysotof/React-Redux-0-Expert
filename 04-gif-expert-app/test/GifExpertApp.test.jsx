import {render,screen} from '@testing-library/react';
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente <GifExpertApp/>', () => {
    
    render(<GifExpertApp/>)
    screen.debug();
 })