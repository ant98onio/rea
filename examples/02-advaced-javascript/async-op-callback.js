// callback é una funzione che si passa come argomento ad un altra funzione la quale puo essere invocata piu tardi dentro la funzione stessa. 

// callback sync
// Sync op callback le operazioni si eseguono in forma sequenziale una dietro l'altra.

function printResult(num, result) {
  console.log(`${num} é ${result}`);
}

function checkEven(num, callbackFn) {
  // faccio prima il controllo su num... 
  const result = (num % 2 == 0) ? 'Pari' : 'non sei pari'; 
  // chiamo la callback dopo aver controllato...
  callbackFn(num, result); 
}; 

checkEven(10, printResult); 


// callback async. é una funzione con dei tempi di esecuzione propri... 

// tempo di esecuzione proprio...
function chiediAlBar() {
  setTimeout(() => {
    return (Math.floor(Math.random() * 10) < 5) ? 'Voglio il Caffe' : 'Voglio il Tea'
  }, 1000);
}

let ordine = chiediAlBar(); 
// console.log tempo di esecuzione istantaneo... 
console.log(`l'ordine effettuato é: ${ordine}`);


// Risolvo con le callback...
function chiediAlBar(callbackFn) {
  setTimeout(() => {
    const ordine = (Math.floor(Math.random() * 10) < 5) ? 'Voglio il Caffe' : 'Voglio il Tea'; 
    callbackFn(ordine); 
  }, 1000);
}

chiediAlBar((ordine) => {
  console.log(`l'ordine effettuato é: ${ordine}`);
}); 






