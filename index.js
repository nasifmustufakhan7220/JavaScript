'use strict'
// Linking a JavaScript file

// let js = 'Amazing';
// console.log(40 + 8 + 23 - 10);


// Values and variables

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";


// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);


// Data Types
// let javaScriptFun = true;
// console.log(javaScriptFun);

// console.log(typeof true);
// console.log(typeof javaScriptFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javaScriptFun = 'YES!';
// console.log(typeof javaScriptFun);


// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);



// let, const and var

// let age = 20;
// age = 30;
// let ages;
// let age

// const brithYear = 1991;
// brithYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher';

// var job = "alu";

// console.log(job);

// lastName = 'Schmedtmann';
// console.log(lastName);



// Basic Operators
// Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';

// console.log(firstName + ' ' + lastName);


// Assignment Operators

// let x = 10 + 5;
// x += 10;
// console.log(x);

// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x--;
// console.log(x);


// Operator Precedence

// const now = 2037;
// const ageJOnas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJOnas, ageSarah);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJOnas + ageSarah) / 2;
// console.log(ageJOnas, ageSarah, averageAge);


// Codding Challenge #1
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const markMass = Number(prompt("Enter mark weight: "));

// const markHeight = Number(prompt("Enter mark height: "));

// const johnMass = Number(prompt("Enter john weight: "));

// const johnHeight = Number(prompt("Enter john height: "));


// const bmiCal = (mass, height) => {
//     return mass / (height * height);
// }

// const markBMI = bmiCal(markMass, markHeight);
// console.log(markBMI);
// const johnBMI = bmiCal(johnMass, johnHeight);
// console.log(johnBMI);

// let higherBMI;

// if (markBMI > johnBMI) {
//     higherBMI = true;
// } else {
//     higherBMI = false;
// }
// console.log(higherBMI);


// String and Template Literales

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonas);

// console.log(`Just a regular string...`);

// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`String
//     multiple
//     lines`);


// Taking Decisions: if / else Statements

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 22;
// }

// console.log(century);


// Codding Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const markMass = Number(prompt("Enter mark weight: "));

// const markHeight = Number(prompt("Enter mark height: "));

// const johnMass = Number(prompt("Enter john weight: "));

// const johnHeight = Number(prompt("Enter john height: "));



// const bmiCal = (mass, height) => {
//     const bmi = mass / height ** 2;
//     return bmi;
// };

// const markBMI = bmiCal(markMass, markHeight);

// const johnBMI = bmiCal(johnMass, johnHeight);


// console.log(markBMI, johnBMI);


// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }


// Type Covertion and Coercion


// type conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);


// type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean({}));


// const money = 100;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// };

// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is undefined');
// }


// Equality Operators: == vs. ===

// const age = 18;
// if (age === 18) {
//     console.log('You just became an adult :D (strict equal operator)');
// }else console.log('You just became an adult :D (loose equal operator)');

// const favourite = Number(prompt("What is your favourite number? "));
// console.log(favourite);
// console.log(typeof favourite);


// if (favourite === 23) {
//     console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

// if(favourite !== 23) console.log('Why not 23?');


// Logical Operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

let i = 0;

while (true) {
    let pass = Boolean(prompt("Enter your password: "));
    if (pass === true) {
        console.log("you are succesfully login");
        break;
    }
    i = i + 1
};

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//      console.log('Someone else should drive...');
// }

// const isTired = false;

// if(hasDriverLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// console.log(hasDriverLicense && hasGoodVision && !isTired);
