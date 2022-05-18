// File Name : ch_eight_objects.js
// Athour    : Joe Centeno
// Date      : 5/18/2022

// 1.0 
// Given the following code, how can you access the name of the person?

let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };

  console.log(person.name);

// 1.1 
// Which of the following values are valid keys for an object?
1             // not valid as strings are keys
'1'           // valid key
undefined     // not a vlaid key
'hello world' // valid key as its a string
true          // not a valid key
'true'        // valid key
// Aparently all are valid keys but js will convernt any value like true and 1 to a string
// this is somthing I didnt know and I am greatful to have this gap in knowlege filled 

// 1.3
// create an object that behaves as an array in a for statement. 
// The object should contain at least 3 elements.
// You should place your code between the braces in the let statement
let myArray = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
  console.log(myArray.length);
}

// 1.4 
  // Create an array from the keys of the object obj below, with all of the keys converted
  // to uppercase. Your implementation must not mutate obj

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

 let arr = Object.keys(obj).map((key) => key.toUpperCase());;
 console.log(arr);

// 1.5
// Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

  let myObj = Object.create(myProtoObj);

// 1.6
// Which of the following values are primitive values?
// Which are objects? Which are neither?
'foo'                            // primitive
3.1415                           // primitive
[ 'a', 'b', 'c' ]                // object
false                            // primitive
function bar() { return "bar"; } // object
undefined                        // premitive
// { a: 1, b: 2 }                // object

// 1.7
// Add a qux property with value 3 to the myObj & examine the following code snippets:
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // A : iterates over just qux rather then all keys

for (let key in myObj) {
    console.log(key); 
  } // A : iterates over all keys with for in 

// 1.8 

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };

  function copyObj(source_obj, keys) {
    let container = {};  

    if(keys) {
        keys.forEach((key) => container[key] = source_obj[key]);
        return container;
      }

    return Object.assign(container, source_obj);
  }
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }

  // 1.9 
  // What does the following program log to the console? Why?
  let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);
// A : the program logs 'hi \n hello' the function bar sets its first arg1.a to 1
// so when you call bar(foo, qux) it assigns the foo object.a to 'hi'

// 2.0 
// How many primitive values are there in the following expression? 
// Identify them. How many objects are there in the expression? Identify those objects.
[1,                        // primitive   
     2,                    // primitive
      ["a", ["b", false]], // primitives in an object
         null,             // prmitive
          {}]              // object
[1, 2, ["a", ["b", false]], null, {}] // all together is an object

// 2.1 
// Write some code to replace the value 6 in the following object with 606:
let obj_1 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

  console.log(obj_1['bar'][3].xyz = 606);