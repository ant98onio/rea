import { createContext } from 'react';

export const AppContext = createContext({
  admin: false, 
  setAdmin: () => {},
  items: [], 
  setItems: (items) => items
}); 

// export default function ListProvider() {
//   return (
//     <AppContext.Provider value={{
//       cards, 
//       setCards
//     }}>
//       <ListCards />
//     </AppContext.Provider>
//   )
// }


