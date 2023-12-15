// Le variabili dichiarate globalmente nel modulo saranno accessibili dell'interno del modulo

// NAMED EXPORTS...
export const nome = 'Nico'; 
export const saluto = 'Ciao '; 

// DEFAULT EXPORT...
export default function saluta() {
  console.log(nome);
}

