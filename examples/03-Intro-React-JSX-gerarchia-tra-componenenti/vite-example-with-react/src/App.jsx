import { useState } from 'react';
import UserList from './components/UserList';
import AppNavbar from './components/AppNavbar';
import AppCounter from './components/AppCounter';

// il metodo useState di react mi ritorna sempre un array con 2 valori 
  // il primo é il valore in se dello stato 
  // il sec é una funzione di aggiornamento del valore dello stato

const styles = {
  color: 'cyan', 
  fontFamily: 'sans-serif', 
  fontSize: '50px'
}; 

// qui posso scrivere tutto il js che voglio
// const numbers = [1, 2, 3]
// numbers.forEach(num => {
//   console.log(num);
// })

// const input = document.querySelector('#title')
// input.addEventListener('change', (event) => {
//   event.currentTarget.value
// })

const database = [{
  id: 0, 
  nome: 'Luigi', 
  email: 'luigi@gmail.com'
}, 
{
  id: 1, 
  nome: 'Marco', 
  email: 'Marco@gmail.com'
},{
  id: 2, 
  nome: 'Nico', 
  email: 'nico@gmail.com'
},{
  id: 3, 
  nome: 'Antonio', 
  email: 'Antonio@gmail.com'
}]; 


function App() {
  const [ title, setTitle] = useState('Hello World'); 
  const [ data ] = useState(database); 

  console.log('il componente sta facendo rendering...');

  return (
    <div className="container">
      <AppNavbar />
      <h1 style={styles}>{title}</h1>
      <h2>Voti di oggi sono {2 + 4 + 6}</h2>
      <h3>La data di oggi: {new Date().toDateString()}</h3>
      <form>
        <label htmlFor='title'>Inserisci il titolo</label>
        <br />
        <input id='title' type="text" onChange={(event) => setTitle(event.currentTarget.value)} value={title} />
      </form>
      <AppCounter />
      <UserList data={data} />
    </div>
  )
}

export default App