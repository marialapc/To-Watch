import "./towatchItem.scss"
function TowatchItem(props){
    return(
      <li className="towatchItem">
        <span>V</span>
        <p>{props.title}</p>
        <span>X</span>
      </li>
    )
  }

  export {TowatchItem};