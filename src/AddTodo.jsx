import { useRef } from 'react'
import Span from "./Span"


function AddTodo() {
  const inputRef = useRef();
  function clickHandler(){
    const inputElement = inputRef.current;
    console.log(inputElement.value);
  }
    return (
      <>
        <div id="containerAddTodo">
          <Span/>
          <input 
          id="inputNewTodo" 
          type="text" 
          placeholder="Type a new todo"
          ref={inputRef}
          />
          <button id="addTodoBtn" type="submit" onClick={clickHandler}>Add Todo</button>
        </div>
      </>
    )
  }
  
  export default AddTodo