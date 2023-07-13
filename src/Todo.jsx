import Span from "./Span"

/*
  On ajoute comme arguments notre variable todos, la function pour delete, la function pour savoir si notre checkbox est coché grâce à des props venant
  de app.jsx, le componant parent.
  On passe le delete en onclick à notre button delete
  On ajoute notre function checkboxchange avec comme argument 
*/
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
