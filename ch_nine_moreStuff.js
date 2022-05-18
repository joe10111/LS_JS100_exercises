// File Name : ch_nine_moreStuff.js
// Athour    : Joe Centeno
// Date      : 5/18/2022

// 1.0 
// What does this code log to the console? Why?
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); 
// A : the console will log [1,4,3] becuse first you copy array1 into array2 then change
// array1[1] = 4, this change will as appear in array2 becuse they are they same array when on
// line 8 we set it to equal array2, any change in 1 no matter if its after line 8 will be reflected
// in array 2

// 1.1  
// What do the following error message and stack trace tell you?
/*
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
*/

// A: it tells me that the var greeting is not defined, and looks like the error is coming 
// from the function not being invoked with () so the compiler dosnt regonize the function as a
// function rather a var thats undefined

// 1.2
// Write some code to output the square root of 37.
  console.log(Math.sqrt(37));

// 1.3
// Given a list of numbers, write some code 
// sto find and display the largest numeric value in the list.
let list = [[1,6,3,2], [-1,-6,-3,-2], [2,2]];

console.log(Math.max(1,6,3,2));    
console.log(Math.max(-1,-6,-3,-2));
console.log(Math.max(2,2));

// 1.4 
// What does the following function do?
function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
  }

  console.log(doSomething('joe')); 
  // The function first turns the string into an array with spilt, then 
  // reverses the array, then maps the length of the string, returning
  // an array with the length of the string

// 1.5 
// Write a function that searches an array of strings for every element that
// matches the regular expression 

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];

  function allMatches(array, word) {
    return array.filter((array) => word.test(array));
  }
  console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// 1.6 
// What is exception handling and what problem does it solve?
// exception handling is when the programmer wants to catch and try errors
// to prevent future bugs or current bugs

// 1.7 
// Challenging Exercise
// write a function named isNotANumber that returns true if the value 
// passed to it as an argument is NaN, false if it is not.

function is_not_a_number(num) {
    return num !== num;
  }
  console.log(is_not_a_number(1));

// 1.8 
// Challenging Exercise
// Without using Object.is, write a function that will return true 
// if the argument is -0, and false if it is 0 or any other number.

function is_negative_zero(num) {
    return 1 / num === -Infinity;
  }

  console.log(is_negative_zero(-0));

  // 1.9 
  // Challenging Exercise
  // Consider this code:
   let x = "5"
   x = x + 1
   "51"
   // Now, consider this code:
   let y = "5"
   y++
  // What gets returned by y++ in the second snippet, and why?
  // it typecats 5 as a number when using ++ but dose not increase the value