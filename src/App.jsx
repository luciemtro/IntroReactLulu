import { useState, useEffect } from 'react'
import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

//la key pour reliée get et set
const LSKEY = "MyTodoApp";


function App() {
  //todos retourne un tableau vide uniquement si le localstorage est vide, setTodos et la function qui mettra todos à jour
  const [todos, setTodos] = useState(() => {
  //On stock le localStorage avec GET, on lui insère la clé pour relié get et set
    const localValue = localStorage.getItem(LSKEY)
    if (localValue == null) return []

    //On retourne localValue en fichier objet JSON
    return JSON.parse(localValue)
  });
  
  useEffect(() => {
    //On renvoie le localStorage avec set en chaine de caractère, on lui insère la clé qui est lié à get
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  });

  //Function pour ajouter une todo
  //On donne un argument "newTodo" à notre function, todo est un objet qui prendra le contenu text de newtodo
  //SetTodos copira le nouveau todo dans todos (met à jour)
  const handleAddTodo = (newTodo) => {
    const todo = { text: newTodo};
    setTodos([...todos, todo]);
  };

  //Function pour delete une todo

  const handleDeleteTodo = (todo) => {
    if (todo.completed) {
      const updatedTodos = todos.filter((item) => item !== todo);
      setTodos(updatedTodos);
    }
  };
  
  //function pour savoir si le checkbox est coché
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
