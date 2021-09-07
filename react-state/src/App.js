import logo from "./logo.svg";
import "./App.css";
import Write from "./comps/Write";
import View from "./comps/View";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main_section">
        <article>
          <Write />
        </article>
        <article>
          <View />
        </article>
      </section>
    </div>
  );
}

export default App;
