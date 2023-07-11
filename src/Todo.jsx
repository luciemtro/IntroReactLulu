import { useState } from "react";
import Span from "./Span"

function Todo() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);

  // Pour supprimer le label via le button
  const handleDeleteClick = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

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
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;

  