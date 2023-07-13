
import { useState, useEffect } from 'react' // Nos hooks

import Title from './Title'
import AddTodo from './AddTodo';
import TodoList from './Todo';
import '../index.css'

//la key pour reliée get et set
const LSKEY = "MyTodoApp";


function App() {
  /* On va utiliser le honk useState qui permet de capturer une valeur, ainsi que de l'uploader.
  Todos est la variable (Notre variable d'état) qui va stocker notre valeur, setTodos (Peu importe leur nom) est la function qui va uploader la valeur dans notre variable.
  Pour l'argument de useState, on peut mettre ce que l'ont veut comme valeur de départ :
  - Un tableau vide ou non
  - Des chaines de caractères vide ou non
  - Un number
  Ici on va y placer une function :
  - On va 
  */
  const [todos, setTodos] = useState(() => {
  //On prend le contenu du localStorage avec GET, on lui insère la key pour relié à set
    const localValue = localStorage.getItem(LSKEY)
    if (localValue == null) return []

  //On retourne et transforme le contenu de localValue ( qui est en chaine de caractère) en objet JSON
    return JSON.parse(localValue)
  });
  
  //On utilise le honk useEffect pour renvoyer notre localStorage
  useEffect(() => {
  //On renvoie le contenu du localstorage avec set, on insère la key de notre get, on transforme notre objet json en chaine de caractère json.
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  });

  /*
    Function pour créer une todo (Mais pas l'afficher, il faudra rajouter une function submit !)
    On donne un parametre "newTodo" à notre function, todo est une variable qui prendra la valeur de newtodo(paramètre)
    Les paramètres ne contiennent rien, celà représente juste que plus tard, un élément/argument prendra sa place,
    C'est aussi comme cela qu'on peut réutiliser des fonctions.

    On créer une constante qui va prendre la valeur de l'élément qu'on placera par la suite dans notre fonction handleAddTodo
    Il peut être dans un objet comme si dessous, comme dans un tableau, dans l'objet on lui indiquera que ce que l'on va recevoir, c'est du texte.

    SetTodos est notre function qui upload la valeur de todos (notre variable d'état)
    Il va : Faire créer une nouvelle copie de Todos (...), et dans ce nouveau tableau, il va recopier la valeur de todo.
  */
  const handleAddTodo = (newTodo) => {
    const todo = { text: newTodo};
    setTodos([...todos, todo]);
  };

  /*
    Function pour delete une todo
    On donne todo en paramètre
    Si notre futur argument ( qui prendra la place de notre paramètre ) est completé :
  */
  const handleDeleteTodo = (todo) => {
    if (todo.completed) {

  //On Créer une constante updatedTodos qui va reprendre notre todos(notre variable d'état) et lui appliquer une function filter :
      const updatedTodos = todos.filter((item) => item !== todo);
  /*filter sert à créer un nouvel array updatedTodos à partir de l'array todos. 
    La fonction de rappel passée à filter vérifie chaque élément (item) de todos et renvoie true si l'élément est différent de la tâche todo 
    que nous voulons supprimer. En d'autres termes, cela crée un nouvel array sans la tâche à supprimer.*/

      const updatedTodos = todos.filter((item) => item !== todo);

      setTodos(updatedTodos);
    }
  };
  
/*Function pour savoir si le checkbox est coché, on la mettra sur notre checkbox onChange={() => onCheckboxChange(todo)}, onCheckboxChange 
  est un props pour pouvoir ramener cette function au fichier todo.jsx
  On donne un parametre todo et on utilise la methode .map dans la quelle on créer une fonction fleché avec comme paramètre
  item, on y met une condition, si le parametre 
*/
  const handleCheckboxChange = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item === todo) {
        return {
          //Créer une copie de item
          ...item,
          // completed : item pas completé (c'est en inversé)
          completed: !item.completed
        };
      }
      return item;
    });
    //comme d'habitude, setTodos va mettre le contenu de updatedTodos dans notre variable d'état todo 
    setTodos(updatedTodos);
  };

  return (
    <>
      <Title />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onCheckboxChange={handleCheckboxChange} />
    </>
    /* todos, onDeleteTodo etc sont des props, on les donnera comme argument dans les componants ou on veut utiliser son contenu, ce qui est placé 
       entre acollade, c'est ce que va prendre le props, ce qui va être transféré vers un autres componant */
  )
}

export default App
