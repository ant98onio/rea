import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function AppNavbar() {
  const navigate = useNavigate(); 
  const { admin, setAdmin, setItems } = useContext(AppContext); 

  return (
    <nav>
      <ul>
        <li><strong>
          <Link to={'/'}>HomePage</Link>
        </strong></li>
      </ul>
      <ul>
        <li><a href="#">Dashboard Admin</a></li>
        <li><Link to="/about">About page</Link></li>
        { !admin ? <li>
          <a href="#" role="button" onClick={() => {
              setAdmin(true)
              navigate('/admin')
            }}>
            Login
          </a>
        </li> : <li>
          <a href="#" role="button" onClick={() => {
              setAdmin(false)
              navigate('/')
            }}>
            Log out
          </a>
        </li> }
        <li>
          <button onClick={() => setItems((prev) => [
            ...prev, 
            {
              id: prev.length, 
              title: `Un altro item ${prev.length}`
            }
          ])}>Add Item</button>
        </li>
      </ul>
    </nav>
  )
}

export default AppNavbar; 