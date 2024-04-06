function TodoItem({ data }) {
    return(
        <li className="todo-item">
            <input type="checkbox" checked={data.done} />
            <span>{data.text}</span>
            <input type="button" value="X" />
        </li>
    )
}

export default TodoItem;