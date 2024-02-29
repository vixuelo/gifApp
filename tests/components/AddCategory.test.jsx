import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory', () => { 
    test('llamada valor caja texto', () => { 
        const valorCategory="jejeje"
        const componente = render(<AddCategory onNewCategory={()=>{}}/>);
        const input =screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:valorCategory}});
        expect(input.value).toBe(valorCategory)
     })
     test('llamada onNewCategory si input tiene algo', () => { 
        const valorInput="jejeje"
        const onNewCategory=jest.fn();
        const componente = render(<AddCategory onNewCategory={onNewCategory}/>);
        const input =screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target:{value:valorInput}});
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(valorInput);

     })
     test('no llamada onNewCategory si input no tiene algo', () => { 
        const valorInput=""
        const onNewCategory=jest.fn();
        const componente = render(<AddCategory onNewCategory={onNewCategory}/>);
        const input =screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target:{value:valorInput}});
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(0);

     })
     
 })