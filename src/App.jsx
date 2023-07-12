import { useState} from 'react'
import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    const todo = { text: newTodo, completed: false };
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (todo) => {
    if (todo.completed) {
      const updatedTodos = todos.filter((item) => item !== todo);
      setTodos(updatedTodos);
    }
  };

  const handleCheckboxChange = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item === todo) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Title />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onCheckboxChange={handleCheckboxChange} />
    </>
  )
}

export default App
