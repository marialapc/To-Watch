import React from "react";
import "./app.scss";
import { AppUI } from "./AppUI";
import { TowatchProvider } from "../../hooks/TowatchContext";

function App() {
  return (
    <TowatchProvider>
      <AppUI />
    </TowatchProvider>
  );
}

export default App;
