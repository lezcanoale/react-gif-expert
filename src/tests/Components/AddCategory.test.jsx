import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../Components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={()=>{}}/>);
    const input=screen.getByRole('textbox');
    fireEvent.input(input,{target:{value:'Sabrina'}});
    // screen.debug();
    expect(input.value).toBe('Sabrina');
  });
  test('debe llamar onNewCategory si el input tiene un valor ', () => {
    const inputValue='Sabrina';
    const onNewCategory=jest.fn();
    //todo
    render(<AddCategory onNewCategory={onNewCategory}/>);

    const input=screen.getByRole('textbox');
    const form=screen.getByRole('form');

    fireEvent.input(input,{target:{value:inputValue}});;
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toBeCalledWith(inputValue);
  });
  test('no debe llamar elon newCategory si el input esta vacion', () => {
    const inputValue='';
    const onNewCategory=jest.fn();
    //todo
    render(<AddCategory onNewCategory={onNewCategory}/>);
    const input=screen.getByRole('textbox');
    const form=screen.getByRole('form');

    // fireEvent.input(input,{target:{value:inputValue}});;
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
})
