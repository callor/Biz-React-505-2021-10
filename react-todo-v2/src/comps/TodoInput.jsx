import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { todo, onChange, onKeyPress, onClick } = useTodoContext();
  return (
    <div className="form">
      <input value={todo.t_text} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
