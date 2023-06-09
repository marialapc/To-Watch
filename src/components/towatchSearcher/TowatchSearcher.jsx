import React  from "react";
import "./towatchSearcher.scss"
import { TowatchContext } from "../../hooks/TowatchContext";

function TowatchSearcher(){
  const {
   searchValue,
    setSearchValue,
   } = React.useContext(TowatchContext)
    return(
      <div className="towatchSearcher">
     <input 
     className="towatchSearcher__bar" 
     placeholder="       ...The third man"
     value={searchValue}
     onChange={(event) =>{
       setSearchValue(event.target.value);
     }}
     />
     </div>
    );
  }

  export {TowatchSearcher};