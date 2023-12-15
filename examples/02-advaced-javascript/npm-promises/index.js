const fs = require('fs');
function outFileFromSystem(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, fileContent) => {
      if (error) {
        return reject(error)
      }
      console.log(fileContent);
      resolve(); 
    })
  })
}

// questa chiamata mi mette i dati a disposizione 
// outFileFromSystem('/Users/nicolagasparro/dev/react-masterclass/examples/02-advaced-javascript/README.md'); 
// // visualizzo o manipolo i dati ricevuti
// console.log('hai ricevuto i dati, fai qualcosa...');

outFileFromSystem('/Users/nicolagasparro/dev/react-masterclass/examples/02-advaced-javascript/README.md')
  .then(() => {
    console.log('hai ricevuto i dati, fai qualcosa...');
  }); 

