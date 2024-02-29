import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('teteando useFetchGifs', () => { 
    test(' ret estadoincial', () => { 
        const{ result } =renderHook(()=>useFetchGifs('FormulaOne'));
        const {current:{images, isLoading}}=result;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })
     test(' ret images y loading false', async() => { 
        const {result} =renderHook(()=>useFetchGifs('FormulaOne'));
        await waitFor(()=>expect(result.current.images.length).toBeGreaterThan(0),{timeout:6000});
        const {images, isLoading}=result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

        
     })
 })