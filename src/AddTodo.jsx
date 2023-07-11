

function AddTodo() {
    return (
      <>
        <div id="containerAddTodo">
          <span id="top"></span>  
          <span id="right"></span>  
          <span id="bottom"></span>
          <span id="left"></span>
          <input 
          id="inputNewTodo" 
          type="text" 
          placeholder="Type a new todo"/>
          <button id="addTodoBtn" type="submit">Add Todo</button>
        </div>
      </>
    )
  }
  
  export default AddTodo