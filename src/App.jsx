// import { useState } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="bg-image"></div>
        <Dashboard />
      </main>
      <footer>
        Coded by&nbsp;
        <a href="https://henriett.dev/" target="_blank">
          Henriett Horvath
        </a>
        , built with&nbsp;
        <a href="https://the-one-api.dev/" target="_blank">
          The One API
        </a>
      </footer>
    </div>
  );
}

export default App;
