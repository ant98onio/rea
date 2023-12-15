import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import AppNavbar from "../components/AppNavbar";

function HomePage() {
  const { items } = useContext(AppContext); 

  return (
    <div className="container">
      <AppNavbar />
      <h1>Sei in Home Page</h1>
      <article>
        <img src="https://picsum.photos/200/300" alt="" />
      </article>
      <article>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default HomePage;