import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
import { useState } from "react";

function App() {
  // TODO 한개의 데이터를 관리할 state선언하기
  const [todo, setTodo] = useState({
    t_id: 0,
    t_date: "",
    t_text: "",
  });

  // TODO List 데이터를 관리할 배열 state 선언하기
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TODO LIST</h1>
      </header>
      <TodoInput
        todoList={todoList}
        setTodoList={setTodoList}
        todo={todo}
        setTodo={setTodo}
      />
      <p>{todo.t_text}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
