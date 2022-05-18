// File Name : ch_five_controlflow.js
// Athour    : Joe Centeno
// Date      : 5/17/2022

// 1.0 
// What values do the following expressions evaluate to?
console.log(false || (true && false));  // false
console.log(true || (1 + 2));           // true 
console.log((1 + 2) || true);           // 3
console.log(true && (1 + 2));           // 3                     
console.log(false && (1 + 2));          // false
console.log((1 + 2) && true);           // true
console.log((32 * 4) >= 129);           // false 
console.log(false !== !true);           // false
console.log(true === 4);                // false
console.log(false === (847 === '847')); // true
console.log(false === (847 == '847'));  // false 
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); // true

// 1.1 
// evenOrOdd
function evenOrOdd(num) {
    return (num % 2 === 0) ? 'even' : 'odd';
}
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));

// 1.2
// evenOrOdd (part 2)

function evenOrOdd_two(num) {
    if(typeof num === "number") {
        return (num % 2 === 0) ? 'even' : 'odd';
    }
    return 'error invalid type';
}

console.log(evenOrOdd_two(3));

console.log(evenOrOdd_two('hi'));

// 1.3 
// What does the following code log to the console, and why?
function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113'); 

  // A : Product2
  // A : Product3
  // A : Product not found!
  // A : no break statments used witch
  // A : makes it not stop when it gets into the case

  // 1.4
  /*
  if(foo()) {
    return 'bar';
  } else {
    return qux();
  } 
  */

  // 1.5 
  // What does this code output to the console?
  function isArrayEmpty(arr) {
      if(arr) {
          console.log('Not Empty');
      } else {
        console.log('Empty');
      }
  }

  isArrayEmpty([]);
  // A : becuse the function is not checking if its empty rather 
  // if it exists

  // 1.6 
  // upper case if its longer than 
  function caps(string) {
    if(string.length >= 10) {
       return string.toUpperCase();
  }
  return string;
}
console.log(caps('joe'));
console.log(caps('joesssssssssssss'));

// 1.7
// numberRange

function numberRange(number) {
    switch(number){
        case number < 0 : console.log(`${number} is less than 0`);
            break;
        case number <= 50 : console.log(`${number} is between 0 and 50`);
            break;
        case number <= 100 : console.log(`${number} is between 50 and 100`);
            break;
        default : console.log(`${number} is greater than or equal to 100`);
            break;
    }
  }

  numberRange(100);
  numberRange(50);