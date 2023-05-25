import React from "react";
import "./app.scss";
import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";

const defaultMovies = [
  { title: "Arrival", watched: true },
  { title: "Jurassic Park", watched: true },
  { title: "Abyss", watched: false },
  { title: "Back to the future", watched: true },
];

function App() {

  const [movies, setMovies] = React.useState(defaultMovies);
  const [searchValue, setSearchValue] = React.useState("");

  const watchedMovies = movies.filter((movie) => !!movie.watched).length;
  const totalMovies = movies.length;
  const searchedMovies = movies.filter((movie) => movie.title.includes(searchValue));

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
          />
        ))}
      </TowatchList>

      <CreateTowatchButton />
    </div>
  );
}

export default App;
