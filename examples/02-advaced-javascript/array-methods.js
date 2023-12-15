const numbers = [2, 4, 6]; 

console.log(numbers.map((x) => {
  return x * 2; 
})); 

// function map(array, callback) {
//   const final = []; 
//   for (let i = 0; i < array.length; i++) {
//     final.push(callback(array[i]))  
//   }
//   return final; 
// }

// console.log(map([2, 4, 6], (x) => x * 2));