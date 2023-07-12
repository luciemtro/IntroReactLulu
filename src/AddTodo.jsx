import { useState } from 'react'
import Span from "./Span"

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");
  
  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  }

  return (
    <>
      <div id="containerAddTodo">
        <Span/>
        <form onSubmit={handleSubmit}>
          <input
            id="inputNewTodo"
            type="text"
            placeholder="Type a new todo"
            value={newTodo}
            onChange={handleChange}
          />
          <button id="addTodoBtn" type="submit">Add Todo</button>
        </form>
      </div>
    </>
  )
}

export default AddTodo
