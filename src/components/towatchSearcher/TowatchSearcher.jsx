import React  from "react";
import "./towatchSearcher.scss"
import { TowatchContext } from "../../hooks/TowatchContext";

function TowatchSearcher(){
  const {
   searchValue,
    setSearchValue,
   } = React.useContext(TowatchContext)
    return(
     <input 
     className="towatchSearcher" 
     placeholder="...The third man"
     value={searchValue}
     onChange={(event) =>{
       setSearchValue(event.target.value);
     }}
     />
    );
  }

  export {TowatchSearcher};