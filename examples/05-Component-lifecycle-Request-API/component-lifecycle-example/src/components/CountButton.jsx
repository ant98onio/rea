import { useState, useEffect } from 'react';

// Non scrivete componenti con funzione Anonima, altrimenti i vostri colleghi non sapranno dove andare a fare debug...
// eslint-disable-next-line react-refresh/only-export-components, react/display-name
// export default () => {
//   const [count, setCount] = useState(0); 
//   return (
//     <button onClick={() => setCount((prev) => prev + 1)}>Count Value: {count}</button> 
//   )
// }; 

function CountButton() {
  const [count, setCount] = useState(0); 

  useEffect(() => {
    console.log('Componente Count Button montato!');
    // disposal function...   

    const mouseListener = (event) => {
      console.log('il mouse si sta muovendo', count, event.x, event.y);
    }; 
    document.addEventListener('mousemove', mouseListener); 
  
    return () => {
      // questa funzione mi rileva: 
        // fase di unmount component 
        console.log('Count Button component é stato rimosso');
        // posso fare tutte le operazioni di pulizia 
        document.removeEventListener('mousemove', mouseListener); 
          // clearInterval
          // clearTimeout
          // close socket connections
          // rimuovi eventi dal dom... 
          // rollback di migrazioni
          // invalidare operazioni... 
    }
  }, []); 

  // passando la dipendenza, questo effetto si eseguirá ogni qualvolta cambia il valore dello state di count...
  useEffect(() => {
    console.log('Count Button value is: ', count);
  }, [count]); 

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Count Value: {count}</button> 
  )
}

export default CountButton; 