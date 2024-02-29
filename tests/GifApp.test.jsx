import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react"
import {GifApp} from "../src/GifApp"
import { useFetchGifs } from "../src/hooks/useFetchGifs";
describe('testeando gifApp', () => { 
    test('testeando varias cats a la vez', async() => { 
        const comp = render(<GifApp/>);
        const input =screen.getByRole('textbox');
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const {result} =renderHook(()=>useFetchGifs());
        await waitFor(()=>expect(result.current.images.length).toBeGreaterThan(0),{timeout:6000});
        
        fireEvent.input(input,{target:{value:"formulaone"}});
        fireEvent.click(button);
        const res=renderHook(()=>useFetchGifs());
        await waitFor(()=>expect(res.result.current.images.length).toBeGreaterThan(0));
        expect(screen.getAllByRole('heading',{level:3}).length).toBeGreaterThan(1);
     })
 })