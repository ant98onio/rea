import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundRoute from './Pages/NotFoundRoute';
import AdminPage from './Pages/AdminPage';
import UnauthorizedPage from './Pages/UnauthorizedPage';
import DashAdminPage from './Pages/DashAdminPage';
import AppContext from './contexts/AppContext';

export function AdminRoutes() {
  // check if admin is true return protectd routes... 
  const { admin } = useContext(AppContext); 
  if (admin) return <Outlet />
  // if not 
  // redirect on unauthorized page...
  return <Navigate to="/unauthorized" replace={true} />
}

export function App() {
  // global state management...
  const [admin, setAdmin] = useState(false);
  const [items, setItems] = useState([]); 

  return (
    <AppContext.Provider value={{
      admin, 
      setAdmin, 
      items, 
      setItems
    }}>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        {/* Rotte parametriche con React router dom... */}
        {/* <Route path='/pokemon/:id' element={<DetailPokemon />}/> */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundRoute />} />
        {/* creo una rotta che conterrá tutte le rotte protette, ovvero quelle accessibili se l'utente é loggato */}
        <Route element={<AdminRoutes />}>
          <Route path='/admin' element={<AdminPage />}/>
          <Route path='/dashboardAdmin' element={<DashAdminPage />}/>
        </Route>
        <Route path='/unauthorized' element={<UnauthorizedPage />}/>
      </Routes>
    </AppContext.Provider>
  )
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Root;
