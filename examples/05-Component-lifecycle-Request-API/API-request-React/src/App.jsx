import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

// la funzione passata all'useEffect non puo essere async 
// cosa ritorna una funzione async? 
  // una funzione async si aspetta che ritorni una Promise...
// useEffect(async () => {
//   return () => {

//   }
// }, []); 

// useEffect(() => {
//   return new Promise((resolve, reject) => {
//     return resolve()
//   })
// })

// mi creo un hook che fa la chiamata api a gutendex.com
function useGutendexApi() {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  useEffect(() => {
    console.log('Ottenendo Books.. (app mounted...!!!)');
    async function getBooks() {
      setLoading(true);
      setError(''); 
      setBooks([]); 
      try {
        const response = await fetch(`https://gutendex.com/books/`); 
        if (response.ok) {
          const json = await response.json(); 
          // una volta parsato il json devo popolare lo stato di books
          // devo aggiornare lo stato di books con setBooks
          setBooks(json.results); 
        } else {
          setError(`Errore nella richiesta dei books`); 
        }
      } catch (error) {
        setError(`Errore nella richiesta - ${error.message}`); 
      }
      setLoading(false); 
    }
    getBooks(); 
  }, []); 

  // Ritorno i valori che voglio esporre o che un altro componente dovrá usare...
  return {
    books, 
    error, 
    loading
  }
}


function App() {
  // const { books, error, loading } = useGutendexApi(); 
  const { data, error, loading } = useFetch(`https://gutendex.com/books/`); 

  return (
    <div className="container">
      <h1>Book List App Example</h1>
      <div id="booksElement">

        {/* {loading ? 'Loading...' : books.map((book) => (
          <article key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.authors.map((author) => author.name)}</p>
            <img src={book.formats['image/jpeg']} alt="book img..." />
          </article>
        ))} */}
        
        {error && <article style={{
          backgroundColor: 'red', 
          color: 'white'
        }}>{error}</article>}

        {loading && <h2 aria-busy="true"></h2>}

        {data && data.map((book) => (
          <article key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.authors.map((author) => author.name)}</p>
            <img src={book.formats['image/jpeg']} alt="book img..." />
          </article>
        ))}

      </div>
    </div>
  )
}

export default App

