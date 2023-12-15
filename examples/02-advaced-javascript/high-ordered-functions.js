function faQualcosa(numero, calcolo) {
  const response = calcolo(numero); 
  return response; 
}; 

// sul numero che ricevo in ingresso 
  // - elevarlo a potenza di 2 
  // - farci la racide quadrata
// definisco le funzioni di callback esternamente alla chiamata della funzione di ordine superiore
const potenza2 = (num) => Math.pow(num, 2);  
const radiceQuadrata = (num) => Math.sqrt(num, 2); 

console.log(faQualcosa(2, potenza2)); 
console.log(faQualcosa(2, radiceQuadrata)); 

// definisco le funzioni di callback internamente alla chiamata della funzione di ordine superiore, come parametro

function checkPari(x, callbackFn) {
  const result = callbackFn(x); 
  return result; 
}; 

console.log(checkPari(10, (x) => {
  return x % 2 == 0 ? `${x} é pari` : `${x} non sei pari`
})); 






