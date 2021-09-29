import logo from "./logo.svg";
import "./App.css";
import PropsDrilling from "./comps/PropsDrilling";
import BookMain from "./comps/BookMain";
import { useState } from "react";

function App() {
  const [book, setBook] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BookMain />
      <PropsDrilling />
    </div>
  );
}

export default App;
