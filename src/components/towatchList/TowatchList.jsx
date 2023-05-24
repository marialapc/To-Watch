import "./towatchList.scss"
function TowatchList({children}){
    return(
   <ul className="towatchList">
    {children}
   </ul>
    );
  }

  export {TowatchList};