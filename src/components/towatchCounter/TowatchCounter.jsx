import React from "react";
import "./towatchCounter.scss"
import { TowatchContext } from "../../hooks/TowatchContext";

function TowatchCounter(){
 const {
  watchedMovies,
  totalMovies,
 } = React.useContext(TowatchContext)
    return(
      <h1 className="towatchCounter">
        Has visto 
        <span className="towatchCounter__number"> {watchedMovies} </span> 
         de  
         <span className="towatchCounter__number"> {totalMovies} </span> 
         películas
      </h1>
    )
  }

  export {TowatchCounter};