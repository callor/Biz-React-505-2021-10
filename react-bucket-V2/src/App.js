import "./App.css";
import BackImage from "./image/header_background.jpg";
import BuckMain from "./comps/BuckMain";
import Footer from "./comps/Footer";

function App() {
  const backgoundStyle = {
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: "contain",
  };

  return (
    <div className="App">
      <header className="App-header" style={backgoundStyle}></header>
      <section className="w3-container w3-margin">
        <BuckMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
