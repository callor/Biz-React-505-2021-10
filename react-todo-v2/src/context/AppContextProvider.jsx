import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// 함수내부에서 단 한줄 의 return 만 있을 경우 모두 생략가능
// const useTodoContext = () => {return useContext(AppContext);};
export const useTodoContext = () => useContext(AppContextProvider);

const AppContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "",
      t_isComplete: false,
    },
  ]);

  const todoInsert = (text) => {};
  const completeToggle = (id) => {};
  const todoDelete = (id) => {};

  const propsData = {
    todoList,
    setTodoList,
    todoInsert,
    completeToggle,
    todoDelete,
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
