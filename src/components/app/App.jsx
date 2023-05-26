import React from "react";
import "./app.scss";
import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";


function App() {

  const localStorageMovies = localStorage.getItem('ToWatch1.0');
  let parsedMovies;

  if (!localStorageMovies){
    localStorage.setItem('ToWatch1.0', JSON.stringify([]));
    parsedMovies = [];
  } else {
    parsedMovies = JSON.parse(localStorageMovies);
  }

  const [movies, setMovies] = React.useState(parsedMovies);
  const [searchValue, setSearchValue] = React.useState("");

  const watchedMovies = movies.filter((movie) => !!movie.watched).length;
  const totalMovies = movies.length;
  
  const searchedMovies = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const searchTitle = searchValue.toLowerCase();
    return movieTitle.includes(searchTitle);
  });

  const saveMovies = (newMovies) => {
    localStorage.setItem('ToWatch1.0', JSON.stringify(newMovies));
    setMovies(newMovies);
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
    <div className="app">
      <TowatchCounter watched={watchedMovies} total={totalMovies} />
      <TowatchSearcher
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TowatchList>
        {searchedMovies.map((movie) => (
          <TowatchItem
            key={movie.title}
            title={movie.title}
            watched={movie.watched}
            onWatched={() => watched(movie.title)}
            onDelete={() => deleted(movie.title)}
          />
        ))}
      </TowatchList>

      <CreateTowatchButton />
    </div>
  );
}

export default App;
