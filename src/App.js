import Header from "./Header";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <TodoAdd />
    </div>
  );
}

export default App;