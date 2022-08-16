import {screen,render} from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';
describe('Prueba en el componente <GifExpertApp />', () => {
    test('debe de devolver el estado inicial ', () => {
        render(<GifExpertApp />);
        screen.debug();
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    })
    
})
