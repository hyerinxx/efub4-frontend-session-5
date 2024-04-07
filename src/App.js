import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd"
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoAdd todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;