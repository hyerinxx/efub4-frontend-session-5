import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
    return (
        <ul className="todo-list">
            {todoList.map((item) => {
                return (
                    <TodoItem data={item} />
                );
            })}
        </ul>
    )
}

export default TodoList;