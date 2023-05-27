import React from "react";
import "./app.scss";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TowatchProvider } from "../../hooks/TowatchContext";


function App() {
  return (
    <TowatchProvider>
      <AppUI />
    </TowatchProvider>

    
  );
}

export default App;
