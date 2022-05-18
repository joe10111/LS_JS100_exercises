// File Name : ch_three_IO.js
// Athour    : Joe Centeno
// Date      : 5/17/2022

// 1.0 - greeter.js part 1
function greeter(name) {
    return `Hello, ${name}!`;
}

console.log(greeter('Joe'));

// 1.1 - greeter.js part 2
function greeter_two(first_name, last_name) {
    return `Hello, ${first_name} ${last_name}`;
} 
console.log(greeter_two('Joe', 'Centeno'));

// 1.2 - ager part 2
function ager(age) {
    console.log(`You are ${age} years old.`);
    console.log(`In 10 years, you will be ${age + 10} years old.`);
    console.log(`In 20 years, you will be ${age + 20} years old.`);
    console.log(`In 30 years, you will be ${age + 30} years old.`);
    console.log(`In 40 years, you will be ${age + 40} years old.`);
}
