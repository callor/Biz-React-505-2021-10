import logo from "./logo.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import MainComp from "./comps/MainComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <MainComp />
      </UserContextProvider>
    </div>
  );
}

export default App;
