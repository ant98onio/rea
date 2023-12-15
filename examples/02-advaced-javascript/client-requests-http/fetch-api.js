// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((dati) => {
//     console.log(dati);
//   })
//   .catch((error) => {
//     console.log(error);
//   }) 

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json(); 
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getUsers(); 

