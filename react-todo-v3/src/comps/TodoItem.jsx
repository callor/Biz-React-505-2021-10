import React from "react";
import "../css/TodoItem.css";

function TodoItem({ todo }) {
  const { t_id, t_text, t_comp } = todo;
  return (
    <div className="todo_item">
      <div className="todo_delete">&times;</div>
      <div className="todo_text">
        {t_text}
        {t_id}
      </div>
      <div className="check_mark">&#x2713;</div>
    </div>
  );
}

export default TodoItem;
