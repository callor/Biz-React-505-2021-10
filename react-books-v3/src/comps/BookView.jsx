import React, { useContext } from "react";
import BookContext from "../context/BookContext";

/**
 * inline 방식으로 stype만들고 직접 각 컴포넌트에 저장하기
 */
function BookView() {
  const { book } = useContext(BookContext);

  const viewStyle = {
    width: "80vw",
    margin: "20px auto",
    display: "flex",
    border: "1px solid #ddd",
    padding: "1rem",
    backgroundColor: "#aaa",
  };

  const pStyle = {
    flex: "1",
    border: "1px solid #aaa",
    margin: "10px",
  };
  return (
    <div className="book_view" style={viewStyle}>
      <p style={pStyle}>도서명 : {book.b_name}</p>
      <p style={pStyle}>장르 : {book.b_genre}</p>
    </div>
  );
}

export default BookView;
