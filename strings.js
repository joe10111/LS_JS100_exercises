// File Name : strings.js
// Athour    : Joe Centeno
// Date      : 5/12/2022

// 1.0 - Length
// Determine the length of the string 
let stringLength = "These aren't the droids you're looking for.".length;
 console.log(stringLength); // A : 43

// 1.1 - ALL CAPS 
// How do turn this string into an uppercase string
let upperCaseString = 'confetti floating everywhere'.toUpperCase();
console.log(upperCaseString);

// 1.2 - repeat string

function repeat(string, num) {
  return string.repeat(num);
}

console.log(repeat('ha', 3));

// 1.3 - Multline String 
let multiLine = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
console.log(multiLine);

// 1.4 - case-insenstive Equality
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase(); // A : true
string1.toLowerCase() === string3.toLowerCase(); // A : false

// 1.5 - Contains Character

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

if(byteSequence.includes('x')) {
    console.log('X found in byteSequence');
} else {
    console.log('X is missing!');
}

// 1.6 - Blank Part 1
function isBlank (string) { 
    if(string === '') {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

// 1.7 - Blank Part 2
function isBlankTwo (string) { 
    if(string.trim() === '') {
        return true;
    } else {
        return false;
    }
}

console.log(isBlankTwo('mars')); // false
console.log(isBlankTwo('  '));   // false
console.log(isBlankTwo(''));     // true

// 1.8 - Capitalize Words 

let string = 'launch school tech & talk';
let words = string.split(' ');
let container = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  container.push(word[0].toUpperCase() + word.slice(1));
}

console.log(container.join(' ')); // A: 'Launch School Tech & Talk'