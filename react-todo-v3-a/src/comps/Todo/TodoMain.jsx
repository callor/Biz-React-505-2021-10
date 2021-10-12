import "../../css/TodoMain.css";
import { AppContextProvider, UserContextProvider } from "../../context";

function TodoMain({ header, form, children }) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <main className="todo_main_layout">
          <div className="title">{header}</div>
          <section className="form_wrapper">{form}</section>
          <section className="list_wrapper">{children}</section>
        </main>
      </UserContextProvider>
    </AppContextProvider>
  );
}

export default TodoMain;
