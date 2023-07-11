import { useState } from 'react'
import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

function App() {
const [todo, setTodo] = useState("");
const [todos, setTodos]= useState([]);
  return (
    <>
      <Title/>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
