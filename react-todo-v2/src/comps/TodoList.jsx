import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();

  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    // todo.t_text
    return (
      <TodoItem
        key={t_id}
        t_id={t_id}
        t_text={t_text}
        t_isComplete={t_isComplete}
      />
    );
  });

  return <div>{viewList}</div>;
}

export default TodoList;
