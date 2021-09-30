import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

function BookMain() {
  return (
    <AppContextProvider>
      <Route path="/" exact>
        여기는 홈화면
      </Route>
      <Route path="/insert" exact>
        <BookInput />
      </Route>
      <Route path="/list" exact>
        <BookList />
      </Route>
    </AppContextProvider>
  );
}

export default BookMain;
