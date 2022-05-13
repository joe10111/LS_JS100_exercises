// File Name : loops.js
// Athour    : Joe Centeno
// Date      : 5/3/2022

// 1.0 - loop and log
// what will the code bellow log?
for (let i = 0; i <= 10; i += 2) {
    //console.log(i);
  }

// 2
// 4
// 6
// 8
// 10

// 1.1 - CountDown
// Fix code bellow to decrease
for (let i = 10; i >= 0; i -= 1) {
  console.log(i);
}

console.log('Launch!');

// 1.2 - Triple Greeting
// Make a loop that logs greeting three times

for(let i = 0; i < 3; i++) {
  console.log('Aloha!');
}

// 1.3 - Take Two
// Write a for loop that iterates over all
// numbers from 1 to 100, and outputs the result 
// of multiplying each element by 2.

for(let i = 1; i <= 100; i++) {
  console.log(i * 2);
}

// 1.4 - Looping over Array Elements 
let array = [1,2,3,4];
array.map((num) => console.log(num));

// 1.5 - Continue
// Loop over and log each citties length but not null values
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for(let i = 0; i < cities.length; i++) {
  if(cities[i] === null) {
    continue;
  } else {
    console.log(cities[i]);
  }
}

// 1.6 - And on and on and on
// Fix the the loops so its not an infit loop

for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}

// 1.7 - Write a loop that logs odd numbers 

for(let i = 0; i <= 40; i++) {
  if(i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

// 1.8 - Finding Nemo!
// Loop over array untill you find nemo then stop
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for(i in fish) {
  if(fish[i] === 'Nemo') {
    console.log('Found ' + fish[i] + '!');
    break;
  }
  console.log(fish[i]);
}

// 1.9 - Do while dif
// Whats the diff between these loops?
// 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// One is a do while loop 
// while the other is just a while