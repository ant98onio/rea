import { useState } from 'react';
import ListForm from './components/ListForm';

function App() {
  const [ tasks, setTasks ] = useState([]); 
  // sto definendo la funzione che aggiunge un nuovo task alla lista di tasks
  const addTask = (newTask) => {
    // aggiornare lo state... 
    // devo fare un aggiornamento, immutando lo state! 
    // setTasks((prev) => {
    //   // 1. crea una copia 
    //   const tasksCopy = prev.slice(); 
    //   // 2. posso modificare la copia 
    //   tasksCopy.push({
    //     id: Date.now(), 
    //     content: newTask, 
    //     done: false
    //   }); 
    //   // 3. ritorna la copia 
    //   return tasksCopy; 
    // })

    // MODO PREFERIBILE...
    setTasks((prev) => [
      ...prev, 
      {
        id: Date.now(), 
        content: newTask, 
        done: false
      }
    ]); 

    // setTasks([
    //   ...tasks, 
    //   {
    //     id: Date.now(), 
    //     content: newTask, 
    //     done: false
    //   }
    // ]); 
  }

  return (
    <>
      <h1>List task app</h1>
      <ListForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </>
  )
}

export default App
