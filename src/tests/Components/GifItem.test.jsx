import { GifItem } from "../../Components/GifItem";
import {render,screen} from '@testing-library/react';
describe('Prueba GifItem', () => {
  const title='StrangerThings';
  const url='https://hoypyspace.sfo2.cdn.digitaloceanspaces.com/imagenes/stranger-things-temporada-4-netflix.jpg';
  test('El componente debe coincidir con el snapshot', () => {
    const {container}=render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url}/>);
    // screen.debug();
    // expect(screen.getAllByRole('img').src);
    // console.log(screen.getByRole('img').alt);
    // expect(screen.getByRole('img').alt).toBe(title);
    // expect(screen.getByRole('img').src).toBe(url);
    const{ src,alt}=screen.getByRole('img');
    expect(alt).toBe(alt);
    expect(src).toBe(url);
  });
  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}/>);
    // expect(screeN.getByRole('p'))
    // console.log(screen.getByText(title));
    expect(screen.getByText(title)).toBeTruthy();
  });
  
  
})
