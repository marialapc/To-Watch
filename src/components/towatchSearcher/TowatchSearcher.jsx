import React  from "react";
import "./towatchSearcher.scss"

function TowatchSearcher({searchValue, setSearchValue}){
  
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