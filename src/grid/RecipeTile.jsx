import React from "react";
import "./grid.css";
export default function RecipeTile({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null && (
    <div className="recipeTile" onClick={() =>{
        window.open(recipe["recipe"]["url"]);
    }}>
       <img className="recipeTile__img" src={recipe["recipe"]["image"]} width={'100%'} alt='recipes'/>
         <p className="recipeTile__name">{recipe["recipe"]
         ["label"]}</p> 
    </div>
        )
   ); 

    
}
