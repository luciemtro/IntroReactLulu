import Span from "./Span"



function TodoList({ todos, onDeleteTodo, onCheckboxChange }) {
  return (
    <>
      <div id="containerTodoList">
        <ul>
          <Span/>
          <h2>Todos :</h2>
          {todos.map((todo, index) => (
            <li key={index}>
              <div className="row">
                <div className="inputdiv">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onCheckboxChange(todo)}
                />
                </div>
                <label>{todo.text}</label>
                <button onClick={() => onDeleteTodo(todo)}>Delete</button>
              </div>
            </li>
          ))}
          
        </ul>
      </div>
    </>
  );
}

export default TodoList;
