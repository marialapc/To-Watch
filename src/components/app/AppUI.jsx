import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";
import { TowatchContext } from "../../hooks/TowatchContext";

function AppUI() {
  return (
    <div className="app">
      <TowatchCounter />
      <TowatchSearcher />
      <TowatchContext.Consumer>
        {({ loading, error, searchedMovies, watched, deleted }) => (
          <TowatchList>
            {loading && <p>Loading...</p>}
            {error && <p>error</p>}
            {!loading && searchedMovies.length === 0 && <p>add a film</p>}

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
        )}
      </TowatchContext.Consumer>

      <CreateTowatchButton />
    </div>
  );
}

export { AppUI };
