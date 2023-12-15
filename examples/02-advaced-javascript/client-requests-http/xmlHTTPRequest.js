const req = new XMLHttpRequest(); 
req.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
req.send(); 
req.addEventListener('load', () => {
  const json = JSON.parse(req.responseText); 
  console.log(json);
});



