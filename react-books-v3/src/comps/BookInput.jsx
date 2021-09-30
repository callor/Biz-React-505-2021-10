import React, { useContext } from "react";
import "../css/BookInput.css";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import MyButton from "../My/MyButton";
import UUID from "react-uuid";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // 입력된 도서정보를 배열에 추가하기
  // 입력된 도서정보에 UUID키값을 추가하고
  // 도서정보를 배열에 저장하는데
  // 타이밍에 따라 아직 UUID아 미쳐 추가 되지 않은 상태에서
  // 리스트에 추가되는 것을 방지하기 위하여 Promise 방식으로
  // 함수를 실행한다
  // 바깥쪽 함수에 async 키워드 추가
  // 내부에서 순서를 지켜야 할 함수들에 await 추가
  const bookInsert = async () => {
    await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);
  };

  return (
    <>
      <div className="input_box">
        <label>도서명</label>
        <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        <label>장르</label>
        <input name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
        <MyButton onClick={bookInsert}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
