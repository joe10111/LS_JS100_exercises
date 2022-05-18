// File Name : ch_six_loops.js
// Athour    : Joe Centeno
// Date      : 5/17/2022

// 1.0 - Ager part 3
function ager(age) {
    console.log(`You are ${age} years old.`);

    for(let i = 10; i <= 100; i += 10) {
        console.log(`In ${i} years, you will be ${age + i} years old.`);
    }
}

console.log(ager(22));

// 1.1 
// 
function factorial (num) {
    let factorial_num = 1;

    for (let i = num; i > 0; i -= 1) {
        factorial_num *= i;
    }
  
    return factorial_num;
}

console.log(factorial(1));     // 1
console.log(factorial(2));     // 2
console.log(factorial(3));     // 6
console.log(factorial(4));     // 24
console.log(factorial(5));     // 120
console.log(factorial(6));     // 720
console.log(factorial(7));     // 5040
console.log(factorial(8));     // 40320

// 1.2 
// The following code causes an infinite loop 
// (a loop that never stops iterating). Why?
/*
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
*/

// A : in line 43 we are assigning the counter to 1 instead of checking
// this leads to an infinte loop

// 1.3 
// Does the following code produce an error? 
// Why or why not? What output does this code send to the console?
for (let i = 0; i < 5;) {
    console.log(i += 1);
  }
  // A : the function will log '1\n 2\n 3\n 4\n 5\n'
  // It dose not throw an error becuse how you define a for loop is 
  // optional to the user and dose not need all three statments to run

// 1.4
// Refactor the code so that you don't 
// need to call randomNumberBetween from two different locations

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let tries = 0;
  let result;
  
  do {
      result = randomNumberBetween(1, 6);
      tries += 1;
    } while (result <= 2)
  
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// 1.5
// Factorial part 2 recurstion

function factorial (num) {
   return (num <= 1) ? 1 : num * factorial(num -1);
}

console.log(factorial(1));     // 1
console.log(factorial(2));     // 2
console.log(factorial(3));     // 6
console.log(factorial(4));     // 24
console.log(factorial(5));     // 120
console.log(factorial(6));     // 720
console.log(factorial(7));     // 5040
console.log(factorial(8));     // 40320