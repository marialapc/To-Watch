import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";

function AppUI({
  loading,
  error,
  watchedMovies,
  totalMovies,
  searchValue,
  setSearchValue,
  searchedMovies,
  watched,
  deleted,
}) {
  return (
    <div className="app">
      <TowatchCounter watched={watchedMovies} total={totalMovies} />
      <TowatchSearcher
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TowatchList>
        {loading && <p>Loading...</p>}
        {error && <p>error</p>}
        {(!loading && searchedMovies.length === 0) && <p>add a film</p>}

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

export { AppUI };
