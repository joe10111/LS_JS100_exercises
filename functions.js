// File Name : funcions.js
// Athour    : Joe Centeno
// Date      : 5/4/2022

// 1.1 - sum function

function sum (num0, num1) {
   return (num0 + num1)
}

console.log(sum(22, 10));

// 1.2 - Log Quote 
function brendanEichQuote() {
    console.log('Always bet on JavaScript.');
}

brendanEichQuote();

// 1.3 - Cite Author 
function cite(name, quote) {
    console.log(`${name} said: "${quote}"`);
}

cite('Brendan Eich','Always bet on JavaScript.');

// 1.4 - Squared Number 

function squaredNumber(num) {
    return num ** 2;
}

console.log(squaredNumber(2));

// 1.5 - Dsiplay Divison 
// What will the following code display?
function multiplesOfThree() {
    let divisor = 1;
  
    for (let dividend = 3; dividend <= 30; dividend += 3) {
      console.log(dividend + ' / ' + divisor + ' = 3');
      divisor += 1; 
    }
  }
  
  multiplesOfThree(); // Its not gonna get called here

// 1.6 - Compare by length
function compareByLength(string0, string1) {
    if(string0.length < string1.length) {
        return -1;
    }
    
    if(string0.length > string1.length) {
        return 1;
    }

    if(string0.length === string1.length) {
        return 0;
    }
}

console.log(compareByLength("hiiiiiiiii", 'hello'));

// 1.7 - Captin Ruby
let stringRuby = 'Captin Ruby';
stringRuby = stringRuby.replace('Ruby', 'JavaScript');
console.log(stringRuby);

// 1.8 - Internationalization 1

function greet (inString) {
    switch(inString) {
        case 'en' : return 'hi';
        case 'ru' : return 'Привет';
        case 'uk' : return 'Привіт';
        case 'hy' : return 'Ողջու՜յն';
        case 'ar' : return 'مرحبا';
        case 'zh' : return '你好';
        case 'bs' : return 'zdravo';
        case 'ku' : return 'merheba';
        case 'ko' : return '안녕';
        default : return 'Not Valid';
   }
}

console.log(greet('uk'));

// 1.9 - Locale part 1
function extractLanguage(iso) {
    let arr = iso.split('_');
    return arr[0];
}  

console.log(extractLanguage('en_US.UTF-8'));

// 2.0 - local part 2
function extractRegion(iso) {
    let arr = iso.split('.');
    let newArr = arr[0].split('_');
    return newArr[1];
}  

console.log(extractRegion('en_US.UTF-8'));

// 2.1 - Internationalization 2 

function localGreet(locale) {
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
  
    switch(language) {
        case 'en' : return 'hi';
        case 'ru' : return 'Привет';
        case 'uk' : return 'Привіт';
        case 'hy' : return 'Ողջու՜յն';
        case 'ar' : return 'مرحبا';
        case 'zh' : return '你好';
        case 'bs' : return 'zdravo';
        case 'ku' : return 'merheba';
        case 'ko' : return '안녕';
        default : return 'Not Valid';
   }
  }

  console.log(localGreet('en_US.UTF-8'));