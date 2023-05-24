import "../styles/App.scss";
import { CreateTowatchButton } from "./CreateTowatchButton";
import { TowatchCounter } from "./TowatchCounter";
import { TowatchItem } from "./TowatchItem";
import { TowatchList } from "./TowatchList";
import { TowatchSearch } from "./TowatchSearch";

function App() {
  return (
    <div className="App">
      <TowatchCounter />
      <TowatchSearch />

      <TowatchList>
        <TowatchItem />
        <TowatchItem />
        <TowatchItem />
      </TowatchList>

      <CreateTowatchButton />
    </div>
  );
}

export default App;
