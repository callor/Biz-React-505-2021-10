import React from "react";

function TodoInput(props) {
  const { todo, setTodo, todoList, setTodoList } = props;

  // 입력박스에 text를 입력하면 한개의 TODO데이터 만들기
  const onChangeHandler = (e) => {
    setTodo({
      t_id: todoList.length,
      t_text: e.target.value,
      t_date: Date().toString(),
    });
  };

  const todoInsert = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="todo_input_box">
      <input
        placeholder="할일입력"
        defaultValue={todo.t_text}
        onChange={onChangeHandler}
      />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
}

export default TodoInput;
