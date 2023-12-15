// syntactic sugar 
// permettere di estrarre proprietá da una struttura dati per usare il variabili 

// Object Desctructuring 

const persona = {
  nome: 'Ng', 
  status: 'Docente', 
  animali: {
    nome: 'Gofio', 
    tipo: 'gatto'
  }
}; 


const uomo = {
  tipo: 'normoPeso'
}; 

// const nome = persona.nome; 
// console.log(nome);

// const { nome } = persona; 
// console.log(nome);

// const docente = persona.nome; 
// console.log(docente);

// rename della proprietá destrutturata
const { nome: docente } = persona; 
console.log(docente);

// const { data: userName } = await axios.get('/'); 
// const { data: userPass } = await axios.get('/'); 
// const { data: userAge } = await axios.get('/'); 

const nomeGatto = persona.animali.nome; 
console.log(nomeGatto);

const { animali: { nome } } = persona; 
console.log(nome);

const { tipo: tipoAnimale } = persona.animali; 
console.log(tipoAnimale);
const { tipo: tipoUomo } = uomo; 
console.log(tipoUomo);

// Array desctructuring 

const studenti = ['Marco', 'Andrea', 'Matteo', 'Luca']; 

// const primoStudente = studenti[0]; 
// console.log(primoStudente);

const [ primo, secondo, terzo, quarto ] = studenti; 
console.log(primo);

const greet = 'Hello'; 
const [ firstChar, ...rest ] = greet; 

console.log(rest);

const usersNames = ['Nico', 'Marco', 'Andrea']; 
console.log(usersNames);

const utenti = {
  piattaforma: "Aulab", 
  nomiUtenti: [...usersNames]
}

const listaUtenti = [...usersNames]; 
console.log(listaUtenti);









