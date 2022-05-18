// 1.0 - Greet 1
function greet(greeting = 'Hello') {
    console.log(greeting + ', world!');
  }
  
  greet('Salutations'); // logs: Salutations, world!
  
  greet();              // logs: undefined, world!
                        // should log: Hello, world!

// 1.1 - Greet 2 
function greet_two(greeting = 'Hello', recipient = 'world') {
    console.log(greeting + ', ' + recipient + '!');
  }
  
greet_two();                                // logs: Hello, world!
greet_two('Salutations');                   // logs: Salutations, world!
greet_two('Good morning', 'Launch School'); // logs: Good morning, Launch School!\

// 1.2 - Greet 3
function greeting() {
    return 'Good morning';
  }
  
  function recipient() {
    return 'Launch School';
  }

function greet_three() {
    return `${greeting()}, ${recipient()}!`;
}

console.log(greet_three());

// 1.3 - BMI
function BMI(weightInKilograms, heightInCentimeters) {
    heightInMeters = heightInCentimeters / 100;
    return (weightInKilograms / heightInMeters**2).toFixed(2);
}

console.log(BMI(180, 80));

// 1.4 - Cat Age
function catAge(age) {
  if(age === 1) {
    return 15;
  }

  if(age === 2) {
    return 24;
  }

  if(age > 2) {
      return 24 + (age - 2) * 4;
  }
}

console.log(catAge(27));

// 1.5 - Remove Last Char
function removeLastChar(string) {
    return string.split('').slice(0,-1).join('');
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

// 1.6 - Refactor to Arrow Functions
const template = 'I VERB NOUN.';

 const sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

// 1.7 Arrow Functions (PT2)
let initGame = () => {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);