import logo from "./logo.svg";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import { useState } from "react";
import UUID from "react-uuid";

function App() {
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_addr: "서울시",
    a_age: 30,
  });
  const [addrBook, setAddrBook] = useState([]);
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AddressInput stateGroup={stateGroup} />
      <AddressList addrBook={addrBook} />
    </div>
  );
}

export default App;
