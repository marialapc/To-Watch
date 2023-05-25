import "./towatchItem.scss"
import watchedIcon from "../../assets/icons/watched-icon.png"
function TowatchItem(props){
    return(
      <li className="towatchItem">
       <img src={watchedIcon} alt="watched" />
        <p>{props.title}</p>
        <span>X</span>
      </li>
    )
  }

  export {TowatchItem};