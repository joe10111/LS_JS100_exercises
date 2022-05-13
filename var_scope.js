// File Name : var_loops.js
// Athour    : Joe Centeno
// Date      : 5/4/2022

// 1.0 - whats my value
// What will this code run? 
//console.log(greeting);

//var greeting = 'Hello world!';

// output : undefined becuse var is scoped to local but not defined yet.

// 1.1 - What's my value? (Part 2)
// What will this code run? 
//console.log(greeting);

//let greeting = 'Hello world!';
// output : ReferenceError: Cannot access 'greeting' before initialization

// 1.2 - What's my value? (Part 3)
// What will this code run?  
/*
if (true) {
    let myValue = 20;
  }
  
  console.log(myValue);
*/
// A : Refrances error becuse the myvalue is defined in a function scope
/*
// 1.3 - What's my value? (Part 4)
function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
    }
  }
  
  myFunction(); // output : 1 

// 1.4 - What's my value? (Part 5)
function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
      let a = 2;
      console.log(a);
    }
  }
  
  myFunction();// A : cant get accese to a on line 48 throws ReferenceError
*/
/*
// 1.5 What's my value? (Part 6)
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false becuse we are console.loging in the global scope, not the if statment scope

// 1.6 - What's my value? (Part 7)
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
*/
// 1.7 - What's my value? (Part 7)
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); // A : 1

// 1.8 - What's my value? (Part 8)
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // A : 2