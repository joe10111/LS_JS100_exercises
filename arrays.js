// File Name : arrays.js
// Athour    : Joe Centeno
// Date      : 5/12/2022

// 1.0 - First Element 
function first(array){
    return array[0];
}

console.log(first([1,2,3,4]));

// 1.1 - Last Element
function last(array){
    return array[array.length - 1];
}

console.log(last([1,2,3,4]));

// 1.2 - Add + Delete
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();

energy.push('geothermal');

console.log(energy);

// 1.3 - Alphabet

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabet_array = alphabet.split('');
console.log(alphabet_array);

// 1.4 - Filter
let scores = [96, 47, 113, 89, 100, 102];

console.log(scores.filter((num) => num >= 100).length); // A 

// 1.5 - Vocab
let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

  vocabulary.map((word) => word.map((innerWord) => console.log(innerWord)));

// 1.7 - Strict Equal Arrays
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // A : false
// A : checking if is same obj in memory rather then the properties of the array

// 1.8 - isArray
function filter(input) {
    // Is input an array?
    if(Array.isArray(input) === true) {
        return true;
    } else {
        return false;
    }
  }

  console.log(filter([1,2,3]));

  // 1.9 - Travel
  let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(place, array) {
    return array.map((word) => {
        if(word === place) {
            return true;
        }
        return false;
      }).filter((bool) => bool === true).toString();
  }

  console.log(!!contains('Paris', destinations));

// 2.0 - Passcode 
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-')); // A
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

//2.1 - grocery list
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
    console.log(groceryList.shift());
    console.log(groceryList);
  }

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus