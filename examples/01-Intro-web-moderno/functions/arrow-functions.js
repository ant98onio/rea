// definition function 
// function somma(x, y) {
//   return x + y
// };

// declaration function
// No NAME function
// Anonima 
// const somma = function(x, y) {
//   return x + y
// }; 

// arrow function 
const somma = (x, y) => {
  return x + y
}; 

console.log(somma(2, 42));

// implicit return 
// const somma = (x, y) => x + y; 

// se ho un solo argomento / parametro posso omttere le parentesi ()
// const saluta = persona => `Ciao ${persona}`; 

// se non ho argomenti / parametro devo per forza mettere le parentesi ()
const faiQualcosa = () => 'Banana'; 

// const getUser = () => {
//   return {
//     name: 'NG', 
//     status: 'Teacher'
//   };
// }; 

// implict return di un oggetto devo racchiudere il corpo della funzione in parentesi ()
const getUser = () => ({
  name: 'NG', 
  status: 'Teacher'
}); 

console.log(getUser());













