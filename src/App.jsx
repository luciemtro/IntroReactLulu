import { useState } from 'react'
import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

function App() {
  return (
    <>
      <Title/>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
