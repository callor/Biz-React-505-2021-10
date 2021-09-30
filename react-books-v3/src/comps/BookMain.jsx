import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookContext from "../context/BookContext";
import BookList from "./BookList";
import UUID from "react-uuid";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을때 선택적으로 화면을 보여주기
 */

function BookMain() {
  const [book, setBook] = useState({
    b_id: UUID(),
    b_name: "자바야 놀자",
    b_genre: "IT 개발서",
  });

  const [bookList, setBookList] = useState([]);

  // 상위 컴포넌트에서 이벤트를 생성하고
  // 하위 컴포넌트로 전달할때는 반드시 e(event) 매개변수를
  // 같이 포함하는 것이 좋다.
  const onClick = (e) => {
    alert("여기는 onClick");
  };

  const providerData = { book, setBook, bookList, setBookList, onClick };
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
