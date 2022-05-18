// File Name : ch_seven_arrays.js
// Athour    : Joe Centeno
// Date      : 5/18/2022

// 1.0
//In the following code, what are the final 
// length values for array1, array2, array3, array4, and array5?
let array1 = [1, 2, undefined, 4];  // length = 4
console.log(array1.length); 
let array2 = [1];  // legnth = 1
array2.length = 5; // length = 5
console.log(array2.length); 

let array3 = [];
array3[-1] = [1]; // out of scope so length = 0
console.log(array3.length); 

let array4 = [1, 2, 3, 4, 5]; // length = 5
array4.length = 3;            // length = 3
console.log(array4.length); 

let array5 = []; // length = 0
array5[100] = 3; // length = 101 (wierd)
console.log(array5.length); 
// As already noted, the length is the highest index position that has a value, plus 1

// 1.1
// Log all of the even values from myArray to the console
let myArray = [1, 3, 6, 11, 4, 2,
    4, 9, 17, 16, 0];
    let i = 0;
    while(i !== myArray.length) {
      if(myArray[i] % 2 === 0) {
        console.log(myArray[i]);
       }
      i += 1;
    }

// 1.2 
// Log all of the even values from myArray to the console (part 2)
let myArray_nested = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

  myArray_nested.forEach((array) => array.forEach((num) => {
     if(num % 2 === 0) {
         console.log(num);
     }
    }));

// 1.3
// even or odd map
let num_array = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

  console.log(num_array.map((value) => {
      if(value % 2 === 0) {
          return 'even';
      }
      return 'odd';
  }));

// 1.4
// filter array
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function findIntegers(array) {
    return array.filter((value) => Number.isInteger(value));
}
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// 1.5
// filter and map
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(arr) {
    return mapped_arr = arr.map((value) => value.length).filter((num) => num % 2 === 1);
}
console.log(oddLengths(arr)); // => [1, 5, 3]

// 1.6 
// reduce
let array = [3, 5, 7];
function sumOfSquares(arr) {
   return arr.reduce((total, num) => total + num * num, 0);
}
console.log(sumOfSquares(array)); // => 83

// 1.7
// filter and map part 2 but reduce instead
let array6 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(values) {
    return values.reduce((fillterd_array, chars) => {
        if(chars.length % 2 === 1) {
            fillterd_array.push(chars.length);
        }
      return fillterd_array;
    }, []);
}
console.log(oddLengths(arr)); // => [1, 5, 3]

// 1.8 
// write some code that checks whether the number 3 appears inside these arrays
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function three_exist(arr) {
   mapped_arr = arr.map((num) => num === 3).filter((bool) => bool === true);
   if(mapped_arr.length === 0){
       return false;
   }
   return mapped_arr[0];
}

console.log(three_exist(numbers1));
console.log(three_exist(numbers2));

// 1.9 
// Write some code to replace the value 6 in the following array with 606:
let arr_final = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];
  
  console.log(arr_final[1][3] = 606);