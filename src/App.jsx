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
        Coded by{" "}
        <a href="https://henriett.dev/" target="_blank">
          Henriett Horvath
        </a>
      </footer>
    </div>
  );
}

export default App;
