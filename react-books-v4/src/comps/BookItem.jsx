import { useBookContext } from "../context/AppContextProvider";

const BookItem = () => {
  const { bookList } = useBookContext();
  // map()을  사용하여 배열을 기준으로 컴포넌트 리스트 만들기
  return bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td colspan="4">{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
};

export default BookItem;
