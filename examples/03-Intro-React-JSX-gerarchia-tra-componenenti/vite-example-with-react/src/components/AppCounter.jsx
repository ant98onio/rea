import { useState } from 'react';

function AppCounter() {
  const [ count, setCount ] = useState(0); 
  return ( 
    <article>
      <p>Questo é il carrello prodotto 🛒</p>
      <br />
      <button onClick={() => setCount(count + 1)}>incrementa unita prodotto: {count}</button>
    </article>
  )
}

export default AppCounter