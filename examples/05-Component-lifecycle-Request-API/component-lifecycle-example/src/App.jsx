import { useEffect, useState } from 'react';
import CountButton from './components/CountButton';

function App() {
  // Per visualizzare tutto quello che sta succedendo all'interno del vostro componente usa l'estenzione React Dev Tool
  const [showCountButton, setShowCountButton] = useState(true); 
 
  useEffect(() => {
    console.log('Componente App é montato!!');
  }, []); // Array delle dipendenze...se non passo dipendenze il mio effetto si eseguirá solo all'initial rendering...

  return (
    <div className="container">
      <h1>Component lifecycle Example</h1>
      <button type="button" onClick={() => setShowCountButton((prev) => !prev)}>Toggle show Count</button>
      {showCountButton ? <CountButton /> : null} 
    </div>
  )
}

export default App; 
