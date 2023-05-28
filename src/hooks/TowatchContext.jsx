import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TowatchContext = React.createContext();

function TowatchProvider({ children }) {
  const {
    item: movies,
    saveItem: saveMovies,
    loading,
    error,
  } = useLocalStorage("ToWatch1.0", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const watchedMovies = movies.filter((movie) => !!movie.watched).length;
  const totalMovies = movies.length;

  const searchedMovies = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const searchTitle = searchValue.toLowerCase();
    return movieTitle.includes(searchTitle);
  });

  const addNewMovie = (title) => {
    const newMovies = [...movies];
    newMovies.push({
    title,
    watched: false,
    });
    saveMovies(newMovies);
    };

  const watched = (title) => {
    const newMovies = [...movies];
    const movieIndex = newMovies.findIndex((movie) => movie.title === title);
    newMovies[movieIndex].watched = true;
    saveMovies(newMovies);
  };

  const deleted = (title) => {
    const newMovies = [...movies];
    const movieIndex = newMovies.findIndex((movie) => movie.title === title);
    newMovies.splice(movieIndex, 1);
    saveMovies(newMovies);
  };

  return (
    <TowatchContext.Provider
      value={{
        loading,
        error,
        watchedMovies,
        totalMovies,
        searchValue,
        setSearchValue,
        searchedMovies,
        watched,
        deleted,
        addNewMovie,
        openModal,
        setOpenModal,
        
      }}
    >
      {children}
    </TowatchContext.Provider>
  );
}

export { TowatchContext, TowatchProvider };
