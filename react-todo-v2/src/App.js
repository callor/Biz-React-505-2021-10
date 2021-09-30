import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";
const App = () => {
  return (
    <TodoMain form={<TodoInput />} header="오늘할일">
      <TodoList />
    </TodoMain>
  );
};

export default App;
