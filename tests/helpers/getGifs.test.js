import {getGifs} from '../../src/helpers/getGifs'
describe('Testeando el helper getGifs', () => { 
    test('Ret array de gifs'    
        ,async() => { 
        const gifs 
            = await getGifs('FormulaOne');
        expect (gifs.length).toBeGreaterThan(0) //debe no ser nulo
        expect (gifs[0]).toEqual
       ( {
            title:expect.any(String),
            id:expect.any(String),
            url:expect.any(String)
        })
    
     })
 })
