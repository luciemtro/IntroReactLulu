import { useState } from "react";

function Todo() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos, setTodos] = useState(initialTodos);

  const handleDeleteClick = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div id="containerTodoList">
        <ul>
          <span id="top"></span>
          <span id="right"></span>
          <span id="bottom"></span>
          <span id="left"></span>
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

  