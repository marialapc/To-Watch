import React from "react";
import "./addMovie.scss";
import { TowatchContext } from "../../hooks/TowatchContext";

function AddMovie() {
  const { addNewMovie, setOpenModal } = React.useContext(TowatchContext);
  const [newMovieValue, setNewMovieValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (newMovieValue.trim() === "") {
      alert("Por favor, ingresa el nombre de una película");
      return;
    }
    addNewMovie(newMovieValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewMovieValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label"> AÑADE UNA NUEVA PELÍCULA</label>
      <textarea
        className="form__textarea"
        placeholder=""
        value={newMovieValue}
        onChange={onChange}
      ></textarea>
      <div className="form__buttonContainer">
      <button
        className=" form__button form__button--cancel"
        onClick={onCancel}>
          CANCEL </button>
          <button
        disabled={newMovieValue === ""} 
        className="form__button form__button--add">
          ADD </button>
      </div>
    </form>
  );
}

export { AddMovie };
