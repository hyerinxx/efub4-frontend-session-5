function TodoAdd() {
    return (
        <form className="todo-add">
            <input type="text" required placeholder="오늘의 할 일은?" />
            <input type="submit" value="+" />
        </form>
    )
}

export default TodoAdd;