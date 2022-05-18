// File Name : objects.js
// Athour    : Joe Centeno
// Date      : 5/16/2022

// 1.0 - Retrieve a Value (Part 1)
let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

  console.log(student.courses);

// 1.1 - Retrieve a Value (Part 2)
let joe = {
    firstName: 'Joe',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
  };

  console.log(joe.location.country);

// 1.2 - Add a Property
let fido = {
    name: 'Fido',
    species: 'Labrador Retriever',
    color: 'brown',
    weight: 16,
  };

 fido['age'] = 2; // Add property 'age'.
 fido['favorite Restraunt'] = 'Zo MaMa';// Add property 'favorite food' I made it my own.

// 1.3 - Greetings from Jane

let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet :  function(name) {
        return `Hej, ${name}!`;
    },
  };
  
  console.log(jane.greet('Bobby')); // Hej, Bobby!

// 1.4 - Dot Notation vs Bracket Notation
// Determine Output of the two snipits

function snippet_one(){
    let ocean = {};
    let prefix = 'Indian';
    
    ocean.prefix = 'Pacific';
    
    console.log(ocean); // A : { prefix: 'Pacific' }
}

function snippet_two() {
    let ocean = {};
    let prefix = 'Indian';

    ocean[prefix] = 'Pacific';

    console.log(ocean); // { Indian: 'Pacific' }
}

snippet_one();
snippet_two();

// 1.5 - Is it true?

let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
  };
  
  for (let prop in obj) {
    if (prop === true) {
      console.log("It's true!");
    }
  }

  // A : Becuse while on line 88 is named 'true' the boolean value is false

// 1.6 - Car Keys

let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };

let keys = Object.keys(vehicle);

console.log(keys);

// 1.7 - Convert an object to a nested array
let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  let nestedPersonArray = Object.entries(person);

  console.log(nestedPersonArray);

  // Expected output:
  // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// 1.8 - Visa Versa
let person_one = Object.fromEntries(nestedPersonArray);
console.log(person_one);
// { title: 'Duke', name: 'Nukem', age: 33 }

// 1.9 - Cloning a Person
function clone(obj) {
    return Object.assign({}, obj);
  }
  
  let person_two = {
    title: 'Duke',
    name: {
      value: 'Nukem',
      isStageName: true
    },
    age: 33
  };
  
  let clonedPerson = clone(person_two);
  person_two.age = 34;
  
  console.log(person_two.age);                // 34
  console.log(clonedPerson.age);              // 33
  
  person_two.name.isStageName = false;
  console.log(person_two.name.isStageName);   // false
  console.log(clonedPerson.name.isStageName); // false