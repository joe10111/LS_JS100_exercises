// File Name : ch_one_basics.js
// Athour    : Joe Centeno
// Date      : 5/16/2022

// 1.0
// Concatenate two or more strings, one with your first name and one with your last, 
// to create a string with your full name as its value. For example, if your name
//  is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

let full_Name = 'Joe' +  ' Centeno';
console.log(full_Name);

// 1.2
// Use the arithmetic operators to determine the individual
// digits of a 4-digit number like 4936

let number = 4936;
console.log(number);

let ones_place = number % 10;
console.log(ones_place);
number = (number - ones_place) / 10

let tens_place = number % 10;
console.log(tens_place);
number = (number - tens_place) / 10;

let hundreds_place = number % 10;
console.log(hundreds_place);

let thousands_place = (number - hundreds_place) / 10;
console.log(thousands_place);

// 1.3
// Identify the data type for each of the following values
true         // boolean
false        // boolean
1.5          // float number
2            // int number
undefined    // undefined
{foo: 'bar'} // Object

// 1.4 
// Explain why this code logs '510' instead of 15
console.log('5' + 10);
// A : When you add a 'string' + number since they are two seprate data-types, the complier
// will assume you want to concat the first string rather than add the literal number values

// 1.5 
// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead
console.log(Number('5') + 10); // or (5 + 10) no string in +

// 1.6
// Use the template literal syntax along with the expression Number('5') + 10
// to log the following sentence to the console
// Input  : string numeric value
// Output : The value of 5 + 10 is 15. 

console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

// 1.7 
// Create an array named names that contains a list of pet names
let pet_names = ['Jack','Lilly','Koda','Koko'];
console.log(pet_names);

// 1.8 
// Create an object named pets that contains a list of pet names and the type of animal
let pet_object = {asta : 'dog', butterscotch : 'cat', pudding : 'cat', neptune : 'fish', darwin : 'lizard'}

// 1.9 
// What value does the following expression evaluate to?
console.log('foo' === 'Foo');
// A : false, the lowercase f and uppercase F are differnt chars meaning its not the same string

// 2.0 
// What value does the following expression evaluate to?
console.log(parseInt('3.1415'));
// A : Transforms string float value into an int value of 3 

// 2.1 
// What value does the following expression evaluate to?
console.log('12' < '9');
// LS A : This question is a bit tricky:
// the expression evaluates as true since the operands are strings, not numbers.
// I guessed true before I ran the code, I was confused why it would say false
// reading more about how js handles string comparson it now makes sense
// even though alot of these problems are very basic,