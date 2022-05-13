// File Name : loops.js
// Athour    : Joe Centeno
// Date      : 5/3/2022

// 1.0 - Values in js that are (falsy = F)
false     // F
null      // F
undefined // F
0         // F
NaN       // F
'' || ""  // F
-0        // F
0n        // F (big int zero)

// 1.1 & 1.2 - Yes no p1 & p2 lol I did it with out knowing
let randomNumber = Math.round(Math.random());
 console.log((randomNumber === 1) ? 'Yes!' : 'No.' );

// 1.3 - rain or shine
let weather = 'sunny';

if(weather === 'sunny') {
    console.log('Its a gorgeous day!')
} else if(weather === 'rainy') {
    console.log('Grab your umbrella')
} else {
    console.log('Lets stay inside')
}

// 1.4 - Look at switch documentation then look at this code
// what will it log?

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// Needs Break statments or it will log everthing after also

// 1.5 - Make the weather conditionals into a switch
switch(weather) {
    case 'sunny' : console.log('Its a gorgeous day!')
        break;
    case 'rainy' : console.log('Grab your umbrella')
        break;
    default : console.log('Stay inside')
        break;
}

// 1.6 - Logical Conditions 1
if (false || true) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }

  // Output will always be 'Yes!' since its conditonal is 
  // either true or false

// 1.7 - Logical Conditions 2
if (true && false) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }
  // Output will always be 'No...' since its conditonal is 
  // either true and false

// 1.8 - Logical Conditions 3
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

//Output : 3.99

// 1.9 - Are we moving?

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
// Output : true