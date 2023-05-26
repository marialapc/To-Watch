import React from "react";
import "./app.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppUI } from "./AppUI"

//   const defaultMovies = [
//    { title: "Arrival", watched: true },
//   { title: "Jurassic Park", watched: true },
//   { title: "Abyss", watched: false },
//    { title: "Back to the future", watched: true },
//  ];

//  localStorage.setItem('ToWatch1.0', JSON.stringify(defaultMovies));
//  localStorage.removeItem('Towatch1.0');


function App() {
  
  const [movies, saveMovies] = useLocalStorage('ToWatch1.0', []);
  const [searchValue, setSearchValue] = React.useState("");

  const watchedMovies = movies.filter((movie) => !!movie.watched).length;
  const totalMovies = movies.length;
  
  const searchedMovies = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const searchTitle = searchValue.toLowerCase();
    return movieTitle.includes(searchTitle);
  });

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
    <div className="app">
     <AppUI
      watchedMovies={watchedMovies}
      totalMovies={totalMovies}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedMovies={searchedMovies}
      watched={watched}
      deleted={deleted}
     />
    </div>
  );
}

export default App;
