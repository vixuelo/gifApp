import { render, screen} from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock('../../src/hooks/useFetchGifs');
describe('testeando gifgrid', () => {
    test('mostrar loading...', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        const cat = "formulaOne";
        const comp=render(<GifGrid category={cat}/>);
        screen.debug();
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(cat));
    })
        
    test('mostrar imagenes tras desaparecer loading...', () => { 
        const gifs=[{
            id:"33",
            title:"elnano",
            url:"http://www.astonmartin.com/"
        },{
            id:"1",
            title:"super max",
            url:"http://www.rb.com/"
        },]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        screen.debug();
        const cat = "formulaOne";
        const comp=render(<GifGrid category={cat}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    })
 })