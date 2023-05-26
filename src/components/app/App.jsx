import React from "react";
import "./app.scss";
import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";

//   const defaultMovies = [
//    { title: "Arrival", watched: true },
//   { title: "Jurassic Park", watched: true },
//   { title: "Abyss", watched: false },
//    { title: "Back to the future", watched: true },
//  ];

//  localStorage.setItem('ToWatch1.0', JSON.stringify(defaultMovies));
//  localStorage.removeItem('Towatch1.0');

function useLocalStorage(itemName, initialValue){  //custom hook?

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem] ;
}

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
