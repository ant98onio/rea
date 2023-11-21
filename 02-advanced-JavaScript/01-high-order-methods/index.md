# Advanced JavaScript
## Selfwork 1.1 - High-Order-Methods

* Usa metodi come map, filter, reduce per risolvere i seguenti problemi

### PRIMO ESERCIZIO
* your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. the format is: n: string. notice the colon and space in between. 

ex. number([]) => []
    number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"]

### SECONDO ESERCIZIO
* We are going to write a function called arrayDiff that will accept two arrays, a and b, as arguments. You are given two arrays. The goal of the function is to remove all values in array a that is present in array b. The function should return the array after all the common values have been removed. 

ex. arrayDiff([], [4,5]) => []
    arrayDiff([3,4], [3]) => [4]
    arrayDiff([1,8,2], []) => [1, 8, 2]

### TERZO ESERCIZIO
* You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }

Notes:
The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

