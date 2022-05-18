// File Name : ch_two_vars.js
// Athour    : Joe Centeno
// Date      : 5/16/2022

// 1.0 - greeter.js
// Write a program named greeter.js that greets 'Victor' three times. 
// Your program should use a variable and not hard code 
// the string value 'Victor' in each greeting.

function greeter_js(name) {
    console.log(`Good Morning, ${name}.`);
    console.log(`Good Afternoon, ${name}.`);
    console.log(`Good Evening, ${name}.`);
}

greeter_js('Victor');
greeter_js('Joe');

// 1.1 
// Write a program named age.js that includes someone's age and then calculates and reports 
// the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.
function ager(age) {
    console.log(`You are ${age} years old.`);
    console.log(`In 10 years, you will be ${age + 10} years old.`);
    console.log(`In 20 years, you will be ${age + 20} years old.`);
    console.log(`In 30 years, you will be ${age + 30} years old.`);
    console.log(`In 40 years, you will be ${age + 40} years old.`);
}

ager(20);

// 1.2 
// What happens when you run the following program? Why do we get that result?
/*
{
    let foo = 'bar';
}

console.log(foo); // A : ReferenceError: foo is not defined (not defined in scope)
*/
// above is commented out so I can run node on this file

// 1.3 
// What happens when you run the following code? Why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// A : Type error cant assign name to joe, const values cant be changed 

// 1.4 
// What does this program log to the console? Why?
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
// A : console.log bar to console

// 1.5
// Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// A : console.log bar to console

// 1.6 
// 


  