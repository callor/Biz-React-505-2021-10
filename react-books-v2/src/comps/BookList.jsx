import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookList() {
  const { bookList } = useContext(BookContext);

  const viewList = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td>{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>도서명</th>
          <th>장르</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default BookList;
