import React from "react";
import "./towatchItem.scss";
import watchedIcon from "../../assets/icons/watched-icon.png";
import watchedIconActive from "../../assets/icons/watched-icon-active.png";
import deleteIcon from "../../assets/icons/delete-icon.png";

function TowatchItem(props) {
  return (
    <li className="towatchItem">
      {props.watched ? (
        <img
          className="towatchItem__watched-icon"
          src={watchedIconActive}
          alt="watched"
          onClick={props.onUnWatched}
        />
      ) : (
        <img
          className="towatchItem__watched-icon"
          src={watchedIcon}
          alt="not watched"
          onClick={props.onWatched}
        />
      )}
      <p className="towatchItem__title">{props.title}</p>
      <img
        className="towatchItem__delete-icon"
        src={deleteIcon}
        alt="delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TowatchItem };
