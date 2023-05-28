import React from "react";
import './addFilm.scss';

function AddFilm () {
    return (
        <form className="form">
            <label className="form__label">Escribe tu nueva pelicula</label>
            <textarea className="form__textarea" placeholder="Blade Runner"></textarea>
            <div className="form__buttonContainer">
            <button className=" form__button form__button--cancel">CANCEL</button>
            <button className=" form__button form__button--add">ADD</button>
            </div>
        </form>
    );
}

export {AddFilm};