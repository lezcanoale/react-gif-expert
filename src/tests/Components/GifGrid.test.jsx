import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../Components/GifGrid";
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Prueba GifGrid', () => {
    const category="Sabrina";
    test('debe de mostrar el login inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid  category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('debe mostrar items cuando se cargan las imagenes en el useFetchGifs ', () => {
        const gifs=[
            {   id:'ABC',
                title:'Sabrina',
                url:'https://localhost/Sabrina.jpg'
            },
            {   id:'H2O',
                title:'Moana',
                url:'https://localhost/Moana.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        }); 
        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    })
    
})
