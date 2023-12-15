# SCOPE in JS 

lo scope é il dove e il quando le nostre variabili sono accessibili.

Vari livelli di scope: 

* Global scope
  * window object nel web browser
  * in node: global... console.log(global)
* file scope / module scope
  * Accedere alle mie variabili solo all'interno del mio modulo
* function scope 
   * quello che definisco all'interno del blocco della funzione non puo essere accessibile fuori dalla funzione 
   * quello che definisco fuori del blocco della funzione puo essere accessibile dall'interno della funzione 
* block scope 