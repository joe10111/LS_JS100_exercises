// File Name : reading_documentation.js
// Athour    : Joe Centeno
// Date      : 5/2/2022

// 1.0 - finding documentation
// What is an excellent destination when 
// looking for JavaScript documentation?
// A : When looking for documentation I use mdn and 
// A : physical javascript books 

// 1.1 - Lowercase
// Find out whether JavaScript has a method 
// to lowercase a string, for example converting
// 'Aloha, World!' into 'aloha, world!.
// A : Yes its .toLowercase()

// 1.2 - Capitlize 
// Is there a method for captlization?
// A : No there is no method sadly

// 1.3 - Array Element Access
// How can we access the element 
// 'and' in the array ['fish', 'and', 'chips']?
// A : In Java script we can use [1] to accese 'and'

// 1.4 - Out of Bounds 
// What happens if we take the array 
// ['fish', 'and', 'chips'] and try 
// to access the element at index position 10? 
// A : It will return undefined 

// 1.5 - Property vs Methods 
// What are the return values of the statements
// on lines 3 to 5? Refer to the MDN documentation
//  about the Array object for help.
// A : 'palm tree'
// A : 'palm tree'
// A : 'sequia'

// 1.6 - Type of Primitive
typeof 23.5;               // A: number
typeof 'Call me Ishmael.'; // A: string
typeof false;              // A: boolean
typeof 0;                  // A: number
typeof null;               // A: object 
typeof undefined;          // A: undefined

// 1.7 - Return Values
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";
let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   // A: string 
typeof words;   // A: object
typeof isValid; // A: boolean

// 1.8 - Method Chaninging 
tweet.split(' ');                      // A: array
tweet.split(' ').reverse();            // A: array with elements reveresed 
tweet.split(' ').reverse().join(' ');  // A: A revered string 

// 1.9 - Equality
 == // dose type converstion and is not strict
  === // no type converstion and is strict

// 2.0 - style guide 
// Find all viloations of style guid
let ice_cream_taste = 'chocolate' // A: not naming style and no semi collin
let ice_cream_density = 10        // A: same as above 

while(ice_cream_density > 0) // A: no space from while and ()
{ // A: c braccet 
    console.log('Drip...'); 
    ice_cream_density -= 1; //A:  naming 
} // A: c braccet

console.log('The '+ ice_cream_taste +' ice cream melted.');
// A: ^ use `${var}` instead of + "" +

// 2.1 - Data Types
// Without looking into your notes, try to remember 
// which primitive data types are defined in JavaScript.
// Then find this information on MDN.

// A: String
// A: Bool
// A: number
// A: object
// A: bigint
// A: symbol
// A: null
// A: undefined

// 2.2 - Largest Number
// Find the largest number respersented in js
Number.MAX_VALUE; // A : 1.7976931348623157e+308

// 2.3 - Arithmetic Operator Precedence
 4 * 5 + 3 ** 2 / 10  // A: How you see it
 (4 * 5) + ((3 ** 2) / 10) // A : How java script sees it
 
// 2.4 - Date
// A : The Date.now() method returns the number of milliseconds
// A : elapsed since January 1, 1970 00:00:00 UTC.

// 2.5 - getYear vs getfullyear 
let today = new Date();

today.getYear();     // A: 122
today.getFullYear(); // A : 2022

// 2.6 - Argument Signatures
// How many arguments should array.join have?
// A : a seprator argument usally a comma

// 2.7 - String Concatenation
// How can you join strings togeth?
// A : you can use `${string} ${string1}` or string " " + string1

// 2.8 - SyntaxError
// Fix the code bellow
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// A : if statment braccets was bad 

// 2.9 - type error 

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

// A : type error becusse length() 
// A : is a function not length of the string