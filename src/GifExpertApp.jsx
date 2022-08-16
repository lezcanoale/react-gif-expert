import { useState } from "react";
import { AddCategory,GifGrid} from "./Components";
import PropTypes from "prop-types";
export const GifExpertApp = () => {
    const [categories,setcategories]=useState(['Stranger Things']);
    const onAddCategory=(newCategory)=>{
        // console.log(newCategory);
        if(categories.includes(newCategory)) return;

        //se puede tambien poner todas las categorias en lowercase para evitar que se repita
        setcategories([newCategory,...categories]);
    }
    // console.log(categories);
  return (
    <div>
      <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={(value)=>onAddCategory(value)}
        />
        {
            categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        }

      </>
    </div>
  )
}
GifExpertApp.propTypes={
  newCategory:PropTypes.string.isRequired,
}
