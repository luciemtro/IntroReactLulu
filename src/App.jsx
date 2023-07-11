import { useState } from 'react'
import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

function App() {
  const [todos, setTodos] = useState(["My first todo", "My second todo"]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Title />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
