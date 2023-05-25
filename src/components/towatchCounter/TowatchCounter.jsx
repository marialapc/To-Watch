import React from "react";
import "./towatchCounter.scss"

function TowatchCounter({total, watched}){
    return(
      <h1 className="towatchCounter">
        Has visto 
        <span className="towatchCounter__number">{watched}</span> 
         de  
         <span className="towatchCounter__number">{total} </span> 
         películas
      </h1>
    )
  }

  export {TowatchCounter};