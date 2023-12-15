import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ListForm({ addTask }) {
  const [ task, setTask ] = useState(''); 

  const formSubmitted = (event) => {
    // questa é una funzione che si occuperá di piu logiche... non scriverla inline, non é una buona pratica...
    event.preventDefault(); 
    // inserire il valore di task in una struttura dati o uno stato che raccoglie tutti i task...
    addTask(task); 
    // una volta aggiunto pulisci il valore dello state task 
    setTask(''); 
  }

   const getContentTask = (event) => {
    setTask(event.currentTarget.value); 
  }

  return (
    <form onSubmit={formSubmitted}>
      <label htmlFor="newTask">Inserisci Task</label>
      <br />
      <input onChange={getContentTask} type="text" id="newTask" value={task} />
      <button type="submit">Invia task</button>
    </form>
  )
}

export default ListForm