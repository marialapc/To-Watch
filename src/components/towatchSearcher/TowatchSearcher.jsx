import React  from "react";
import "./towatchSearcher.scss"
import { TowatchContext } from "../../hooks/TowatchContext";
import searchIcon from "../../assets/icons/search-icon.png"

function TowatchSearcher(){
  const {
   searchValue,
    setSearchValue,
   } = React.useContext(TowatchContext)
    return(
      <div className="towatchSearcher">
      <img  className="towatchSearcher__icon"  src={searchIcon} alt="search" />
     <input 
     className="towatchSearcher__bar" 
     placeholder="...The third man"
     value={searchValue}
     onChange={(event) =>{
       setSearchValue(event.target.value);
     }}
     />
     </div>
    );
  }

  export {TowatchSearcher};