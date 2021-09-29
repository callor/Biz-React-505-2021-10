import React, { useContext } from "react";
import BookList from "./BookList";
import BookContext from "../context/BookContext";

function BookView() {
  // context로 부터 필요한 state 분해하기
  const { book } = useContext(BookContext);
  return (
    <div>
      <p>입력된 도서명 : {book.b_name}</p>
      <p>입력된 장르 : {book.b_genre}</p>
      <BookList />
    </div>
  );
}

export default BookView;
