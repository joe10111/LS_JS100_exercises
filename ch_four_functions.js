// File Name : ch_four_functions.js
// Athour    : Joe Centeno
// Date      : 5/17/2022

// 1.0 
// What does this code log to the console? 
// Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
// A : the console logs 1, this is becuase foo() changes bar but also redines bar in 
// function scope, so then bar dose not get chnaged / redefined

// 1.1 - greeter.js part 3
// 
let readlineSync = require('readline-sync');
/*
function greeter_js(prompt) {    
    let name_prompt = readlineSync.question(prompt);
    return name_prompt;
  }
  
  let first_name = greeter_js('Please Enter first name: ');
  let last_name = greeter_js('Please Enter last name: ');

  console.log(`Hello, ${first_name} ${last_name}!`);
*/

// 1.2 - 
function getNum (prompt) {
    let num_prompt = readlineSync.question(prompt);
    return parseFloat(num_prompt);
}

function multiply (x, y) {
    return x * y;
}

let num_1 = getNum('Enter first num: ');
let num_2 = getNum('Enter second num: ');

console.log(multiply(num_1, num_2));

// 1.3 - 
function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  console.log(scream('Yipeee')); 
  // A: it logs undefined becuse in scream we are returning nothing

// 1.4 -

function scream(words) {
    return words + '!!!!';
  }
  
  scream('Yipeee'); 
  // A : The return value is Yipeee!!! but there is no log to the console

// left off at control flow ch, need to make a file for it and start