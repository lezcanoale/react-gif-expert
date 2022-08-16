import { useState } from "react";
import PropTypes from 'prop-types';
export const AddCategory = ({onNewCategory}) => {

    const [	inputValue, setinputValue] = useState('');
    
    const onInputChange=({target})=>{
      setinputValue(target.value);
    }

    const onSubmit=(event)=>{
      console.log('Submit del form');
      event.preventDefault();
      if(inputValue.trim().length<=1) return;
      // setCategories(categories=>[...categories,inputValue]);
      onNewCategory(inputValue.trim());
      setinputValue('');
    }

      return (
        <form onSubmit={onSubmit} role="form">
          <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value={inputValue}
            onChange={onInputChange}>
          </input>
        </form>
      )
}
AddCategory.propTypes={
  onNewCategory:PropTypes.func.isRequired,
}


