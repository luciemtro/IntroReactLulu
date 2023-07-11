import Span from "./Span"

function TodoList({ todos, onDeleteTodo }) {
  return (
    <>
      <div id="containerTodoList">
        <ul>
          <Span/>
          <h2>Todos :</h2>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" name="agreement" />
              <label htmlFor="agreement">{todo}</label>
              <button onClick={() => onDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
