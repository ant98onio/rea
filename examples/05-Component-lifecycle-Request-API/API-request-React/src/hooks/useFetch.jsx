import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

    useEffect(() => {
        async function getData() {
          setLoading(true);
          setError(''); 
          setData([]); 
          try {
            const response = await fetch(url); 
            if (response.ok) {
              const json = await response.json(); 
              // una volta parsato il json devo popolare lo stato di books
              // devo aggiornare lo stato di books con setData
              setData(json.results); 
            } else {
              setError(`Errore nella richiesta, correggi api end-point`); 
            }
          } catch (error) {
            setError(`Errore nella richiesta - ${error.message}`); 
          }
          setLoading(false); 
        }
        getData(); 
    }, []); 
    
    return {
      data, 
      error, 
      loading
    }
}

export default useFetch; 