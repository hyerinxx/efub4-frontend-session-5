import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd"
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "첫 번째 투두",
      done: false,
    },
    {
      id: 2,
      text: "두 번째 투두",
      done: true,
    }
  ]);
  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} />
      <TodoAdd />
    </div>
  );
}

export default App;