// NAMED IMPORTS...
import { saluto, nome } from "../module-scope/module.js";
// DEFAULT IMPORT...
import saluta from "../module-scope/module.js";

// named import object 
// import { somma, moltiplica } from "../module-scope/multiple-exports.js";

// default import object
import Math from "../module-scope/multiple-exports.js";

console.log(saluto + nome);

saluta(); 

// console.log('Risposta Somma: ', somma(2, 42));
// console.log('Riposta Moltiplica: ', moltiplica(2, 42));

console.log('Risposta Somma: ', Math.somma(2, 42));
console.log('Riposta Moltiplica: ', Math.moltiplica(2, 42));
