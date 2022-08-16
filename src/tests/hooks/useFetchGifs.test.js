import { renderHook, waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook de nuestro useFetchGifs', () => {
    test('debe de devolver el estado inicial ', () => {
        const { result}=renderHook(()=>useFetchGifs('Sabrina'));
        const {images,isLoading}=result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        // console.log(result);
        // useFetchGifs();
    });
    test('debe retornar un arreglo de imagenes e isloading en false ', async() => {
        const { result}=renderHook(()=>useFetchGifs('Sabrina'));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images,isLoading}=result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
    
})
