import React from "react";
import "./addFilm.scss";
import { TowatchContext } from "../../hooks/TowatchContext";

function AddFilm() {
    const {
     setOpenModal,
     
    } = React.useContext(TowatchContext);

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
      };

      const onCancel =() => {
        setOpenModal(false); 
      }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label">Escribe tu nueva pelicula</label>
      <textarea
        className="form__textarea"
        placeholder="Blade Runner"
      ></textarea>
      <div className="form__buttonContainer">
        <button className=" form__button form__button--cancel" onClick={onCancel}>CANCEL</button>
        <button className=" form__button form__button--add">ADD</button>
      </div>
    </form>
  );
}

export { AddFilm };
