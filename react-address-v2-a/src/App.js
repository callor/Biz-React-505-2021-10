import "./App.css";
import { useState } from "react";
import AdddressInput from "./comps/AdddressInput";
import AddressView from "./comps/AddressView";

function App() {
  const [address, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  return (
    <div className="App">
      <header className="App-header">
        <AdddressInput address={address} setAddress={setAddress} />
        <AddressView address={address} />
      </header>
    </div>
  );
}

export default App;
