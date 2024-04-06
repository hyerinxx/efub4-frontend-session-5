import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
    return (
        <ul className="todo-list">
            <TodoItem data={todoList[0]} />
            <TodoItem data={todoList[1]} />
        </ul>
    )
}

export default TodoList;