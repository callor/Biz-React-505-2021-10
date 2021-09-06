import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Write from "./components/write";
import View from "./components/view";

function App() {
  const [friend, setFriend] = useState({
    f_name: "성춘향",
    f_addr: "남원시",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Write friend={friend} onChangeHandle={onChangeHandle} />
        <View friend={friend} />
      </header>
    </div>
  );
}

export default App;
