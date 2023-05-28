import React from "react";
import "./addMovie.scss";
import { TowatchContext } from "../../hooks/TowatchContext";

function AddMovie() {
  const { addNewMovie, setOpenModal } = React.useContext(TowatchContext);
  const [newMovieValue, setNewMovieValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
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
      <label className="form__label">Escribe tu nueva película</label>
      <textarea
        className="form__textarea"
        placeholder="Blade Runner"
        value={newMovieValue}
        onChange={onChange}
      ></textarea>
      <div className="form__buttonContainer">
        <button
          className=" form__button form__button--cancel"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <button className=" form__button form__button--add">ADD</button>
      </div>
    </form>
  );
}

export { AddMovie };
