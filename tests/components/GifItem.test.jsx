import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"
describe('Testeando GifItem', () => {
    
    const title="titulo";
    const url="https://www.google.com/";
    test('Debe hacer match con el snapshot', () => { 
        const revisar = render(<GifItem/>)

        expect(revisar).toMatchSnapshot()
     })
     test('Debe tener title y url', () => { 
        const revisar = render(<GifItem title={title} url={url}/>);
        
        const {src,alt}=screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })
 })