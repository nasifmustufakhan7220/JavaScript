// Values and Variables

// console.log("Jonas");
// console.log(23);


// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


//Variable name conventions

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "Jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "Programmer";
// let job2 = "teacher";


// console.log(myFirstJob);


//Data Types

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);


// let year;
// console.log(year);
// console.log(typeof year);


// year = 1991;
// console.log(typeof year);

// console.log(typeof null);



// let, const and var

// let age = 30;
// age = 31;

// const birthYear = 1991;

// console.log(birthYear);


// // var job = 'programmer';
// // job = 'teacher';
// // var job = 'coder';

// lastName = 'Schmedtman';
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

// Assignment operators
//let x = 10 + 5; // 15
//x += 10; // 25
//x *= 4; // 100
//let y = x++; // 100, y = 100, x = 101
//x--;
//x--;
//console.log(x); // 99


//Comparison operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);


//Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

//grouping
//console.log(now - 1991 > now - 2018 + (2037 + 10)); // here the javaScript start calculate inside the braket, because it's a group which has high precedence number than any others.

// access and call : In this precedence chart the second highest is function call.

// postfix operators : In this precedence chart the fourth highset number is postfix operators. For example: x++ / x--;
//prefix operators : In this precedence chart the fifth highest number is prefix operators. For example : ++x / --x. Besides Logical NOT !x / Bitwise NOT ~x /Unary plus +x / Unary negation -x / typeof x / void x / delete x	[7] / await x these are also member of this level.



// coding challenge #1

// const bmiCal = (mass,height)=>{
//     const bmi = mass / (height * height);
//     return bmi;
// }

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const mark = bmiCal(markMass, markHeight);
// const john = bmiCal(johnMass, johnHeight);
// let highBMI;
// if (mark > john) {
//     highBMI = 'John'
// } else {
//     highBMI = 'Mark'
// }
// console.log(mark, john);

// const HigherBMI = `${(mark > john) ? `Mark's BMI ${mark.toFixed(2)}` : `Jhon BMI is ${john.toFixed(2)}`} is higher than ${highBMI}`;
// console.log(HigherBMI);



// String and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonas);


// Taking Decisions : if / else statements

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }


// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type conversion

// const inputYear = '1991';

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type coerction

// console.log('I am ' + 23 + ' years old'); // the number 23 will also convert intro string atumatically by JavaScript.


// console.log('23' - '10' - 3); // 10

// console.log('23' / '2'); // 11.5

// let n = '1' + 1; // '11'
// n = n - 1; // 10
// console.log(n);


// Truthy and Falsy Values

// There are five types which we call them as a falsy value because when we see them, we can easily call them falsy. For example : 0, '', undefined, null, NaN thses types always show false.

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean('')); //false

// The remain types all are true.


// const money = 100;
// if (money) {
//     console.log("Don't spend it all ");
// } else {
//     console.log('You should get a job!');
// }

// let height = 10;
// if (height) {
//     console.log('YAY! Height is defined');
// }else {
//     console.log('Height is UNDEFINED');
// }



// Equality Operators : == vs ===
const age = '18';

// if (age === 18) console.log("You just became an adult (strict operator)");
// if (age == 18) console.log("You just became an adult (loose oprator)");

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('Cool! 7 is also an amazing number!');
} else if (favourite === 9) {
    console.log('Cool! 9 is an amazing number!');
} else if (favourite == 10) {
    console.log('Cool! 10 is an amazing number and also used as a looose oparator!');
} else {
     console.log('Number is not 23 or 7 or 9 or 10');
}