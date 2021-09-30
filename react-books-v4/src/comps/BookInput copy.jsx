import "../css/BookInput.css";
import BookView from "./BookView";
import MyButton from "../My/MyButton";
import { useBookContext } from "../context/AppContextProvider";
import { useRef } from "react";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useBookContext();

  /**
   * react에서 일반적으로 선언된 변수는
   * 		let nextId = 0
   * 실제 화면전체가 변경되지 않더라도
   * 		화면전체가 변경 : refresh
   * 		react는 화면을 refresh 하지 않고 rendering한다
   * 		데이터(state)가 변경 되었을때만 reRendering 된다
   *  변수는 무조건 초기화 되어 버린다
   *
   * 초기화 되는 것을 방지하면서 현재 화면에서
   * 어떤 변수(public 변수)의 값을 유지하고 싶을때가 있다
   *
   * 그럴때 referrence 변수로 선언을 해주어야 한다.
   */
  const nextId = useRef(0);
  /**
   * nextId 라는 변수를 만들고
   * 입력창에 값이 입력되면  nextId id에 저장하기
   */
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
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
    // await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);

    // Ref로 선언된 변수의 current 요소를 1 증가하여
    // 다음번 list의 id로 사용한다.
    nextId.current++;

    /**
     * 리스트에 추가한 후 book state를 초기화 하여
     * 입력창에 입력된 내용을 삭제하기
     * 이 기능을 사용하려면
     * 반드시 input box value를 사용해야 한다
     * <input value={state} />
     *
     * <input defaultValue={state} />를 사용하면
     * 기능이 효과 없음
     *
     */
    await setBook({ b_id: "", b_name: "", b_genre: "" });
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
