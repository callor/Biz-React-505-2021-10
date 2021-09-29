import logo from "./logo.svg";
import "./App.css";
import PropsDrilling from "./comps/PropsDrilling";
import BookMain from "./comps/BookMain";
import { useState } from "react";
import BookContext from "./context/BookContext";

function App() {
  const [book, setBook] = useState("자바야 놀자");
  const [address, setAddress] = useState({ b_name: "", b_tel: "", b_addr: "" });
  const providerData = { book, setBook, address, setAddress };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BookContext.Provider value={providerData}>
        <BookMain />
      </BookContext.Provider>
      <PropsDrilling />
    </div>
  );
}

export default App;
