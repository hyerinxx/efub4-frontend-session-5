function TodoItem() {
    return(
        <li className="todo-item">
            <input type="checkbox" />
            <span>투두 아이템 텍스트</span>
            <input type="button" value="X" />
        </li>
    )
}

export default TodoItem;