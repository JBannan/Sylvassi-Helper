import React from "react";
import "./App.scss";
import { CypherOne } from "./components/CypherOne/CypherOne";
import { observer } from "mobx-react";

// WIKI: https://pulsarlostcolony.fandom.com/wiki/Sylvassi_Cyphers

const AppComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CypherOne />
      </header>
    </div>
  );
};

export const App = observer(AppComponent);
