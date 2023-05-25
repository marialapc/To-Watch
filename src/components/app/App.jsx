import React from "react";
import "./app.scss";
import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";

const defaultMovies = [
  {title: 'Arrival', watched: true},
  {title: 'Jurassic Park', watched: true},
  {title: 'Abyss', watched: false},
  {title: 'Back to the future', watched: true},

]

function App() {
  return (
    <div className="app">
      <TowatchCounter  watched={3} total={7}/>
      <TowatchSearcher />

      <TowatchList>
        {defaultMovies.map(towatch => (
          <TowatchItem  key={towatch.title} title={towatch.title} watched={towatch.watched}/>
        ) )}
      </TowatchList>

      <CreateTowatchButton />
    </div>
  );
}

export default App;
