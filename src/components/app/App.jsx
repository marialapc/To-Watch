import React from "react";
import "./app.scss";
import { CreateTowatchButton } from "../createTowatchButton/CreateTowatchButton";
import { TowatchCounter } from "../towatchCounter/TowatchCounter";
import { TowatchItem } from "../towatchItem/TowatchItem";
import { TowatchList } from "../towatchList/TowatchList";
import { TowatchSearcher } from "../towatchSearcher/TowatchSearcher";

const defaultMovies = [
  {title: 'Titanic', watched: false},
  {title: 'Arrival', watched: true},
  {title: 'Abyss', watched: false},
  {title: 'Jurassic Park', watched: true},
  {title: 'Star Wars', watched: true},

]

function App() {
  return (
    <div className="App">
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
