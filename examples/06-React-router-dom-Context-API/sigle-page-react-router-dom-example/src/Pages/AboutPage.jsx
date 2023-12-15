import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function AboutPage() {
  const { items } = useContext(AppContext); 

  return (
    <div>
      <h1>Sei in About Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate dolor praesentium corporis odio, aspernatur est quasi quibusdam, hic provident totam eos sapiente! Quae quos sapiente exercitationem impedit voluptatum labore!</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>

  )
}

export default AboutPage;