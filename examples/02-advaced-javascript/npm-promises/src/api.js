import axios from "axios";

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {
//     // handle success
//     // console.log(response.status);
//     // console.log(response.headers);
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   }); 


async function getUsersData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
  } catch (error) {
    console.error(error);    
  }
}

getUsersData(); 

