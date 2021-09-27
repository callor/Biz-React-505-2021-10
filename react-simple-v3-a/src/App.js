import "./App.css";
import CounterBody from "./comps/CounterBody";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
