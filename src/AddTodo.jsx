import { useState } from 'react'
import Span from "./Span"

function AddTodo({ onAddTodo }) {
  //Notre variable d'état, notre function upload, le démarrage en chaine de caractère vide
  const [newTodo, setNewTodo] = useState("");
  

  /*
  Sert à upload notre variable d'état à partir de la valeur de notre input (cela peut être un autre élément de formulaire comme une textarea, etc.). 
  Notre parametre event représente l'événement déclenché lorsqu'un changement se produit dans notre input.
  On utilise notre function d'upload en lui donnant la valeur de notre évènement, en gros ce qui sera écrit dans notre input.
  */
  function handleChange(event) {
    setNewTodo(event.target.value);
  }

/*
  Comment au dessus, notre paramètre event représente l'événement déclanché lorsqu'un changement se produit dans notre input
  On ajoute à notre évenemment une function préfaite preventDefault()
  Elle empêche le comportement par défaut de notre formulaire de se produire, tel que le rechargement de la page.
  onAddTodo est la function handleAddTodo qu'on a fait passer dans notre page grâce à notre props(onAddTodo) et on lui donne notre variable 
  d'état comme paramètre.
  Pour que notre input se vide quand on valide et que le text ne reste pas dedans, on upload une chaine de caractère vide. 
*/
  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  }

/*
  On ajoute notre function valider à notre formulaire en onSubmit
  on ajoute la valeur de notre variable d'état à notre input
  On ajoute notre function qui récupere ce qui est noté dans notre input en onChange
*/
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
