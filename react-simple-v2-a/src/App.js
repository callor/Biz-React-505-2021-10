import "./App.css";
import { useState } from "react";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput setNumber={setNumber} />
        <CounterView number={number} />
      </header>
    </div>
  );
}

export default App;
