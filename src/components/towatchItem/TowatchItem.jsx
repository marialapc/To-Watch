import "./towatchItem.scss";
import watchedIcon from "../../assets/icons/watched-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";
function TowatchItem(props) {
  return (
    <li className="towatchItem">
      <img
        className="towatchItem__watched-icon"
        src={watchedIcon}
        alt="watched"
      />
      <p className="towatchItem__title">{props.title}</p>
      <img className="towatchItem__delete-icon" src={deleteIcon} alt="delete" />
    </li>
  );
}

export { TowatchItem };
