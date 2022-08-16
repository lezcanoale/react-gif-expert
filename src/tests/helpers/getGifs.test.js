import {getGifs} from '../../helpers/getGifs'
describe('Pruebas en getGifs()', () => {
  test('debe retornar un array de gifs', async() => {
    const gifs= await getGifs('Sabrina');
    expect(gifs.length).toBeGreaterThan(0);
    // console.log(gifs);
    expect(gifs[0]).toEqual({
        id:expect.any(String),
        title:expect.any(String),
        url:expect.any(String),
    });
  });
  
})
