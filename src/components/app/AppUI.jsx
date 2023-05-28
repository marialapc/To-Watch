import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";
import { TowatchContext } from "../../hooks/TowatchContext";
import React from "react";
import { Modal } from "../modal/modal";

function AppUI() {
  const {
    loading,
    error,
    searchedMovies,
    watched,
    deleted,
    openModal,
    setOpenModal,
  } = React.useContext(TowatchContext);

  return (
    <div className="app">
      <TowatchCounter />
      <TowatchSearcher />

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

      <CreateTowatchButton />
      {openModal && (
       <Modal>
       Modal para añadir film
       </Modal>
       )}
    </div>
  );
}

export { AppUI };
