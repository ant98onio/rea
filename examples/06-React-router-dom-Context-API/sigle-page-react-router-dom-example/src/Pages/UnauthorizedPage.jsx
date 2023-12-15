import { Link } from 'react-router-dom';

function UnauthorizedPage() {
  return (
    <div>
      <h1>Non sei admin</h1>
      <Link to='/'>GO back home</Link>
    </div>
  )
}

export default UnauthorizedPage; 