import "./App.css";
import CounterButton from "./comps/CounterButton";
import CounterView from "./comps/CounterView";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CounterView count={count} />
        <CounterButton plus={plus} minus={minus} />
      </header>
    </div>
  );
}

export default App;
