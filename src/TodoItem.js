function TodoItem({ todoThis, todoList, setTodoList }) {
    function deleteTodo() {
        setTodoList(todoList.filter(todoItem => todoItem.id !== todoThis.id));
    }

    return(
        <li className="todo-item">
            <input type="checkbox" checked={todoThis.done} />
            <span>{todoThis.text}</span>
            <input type="button" value="X" onClick={deleteTodo}/>
        </li>
    )
}

export default TodoItem;