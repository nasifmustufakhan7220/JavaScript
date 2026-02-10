'use strict';
/*
function add(a, b) {
    console.log(a, b);
    return a + b;
}

// let sum1 = add(5, 5);
// let sum2 = add(50, 50);
// console.log(sum1, sum2);


function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}


const value = toCelsius(77);
// console.log(value);


//Without perenteshis calling()
function sayHello() {
    return 'Hello world';
}

const txt = sayHello;
// console.log(txt);


function sayHello() {
    return "Hello world"
}


function showCall() {
    let x = sayHello();
    return x;
}
// calling one function from another function
// let y = showCall();
// console.log(y);


function fullName(firstName, middleName,lastName) {
    return `You'r full name is ${firstName} ${middleName} ${lastName} `
}

const name = fullName("Nasif", "Mustufa", "Khan");
// console.log(name);


function fruitProccess(apples,orange = 2) {
    const juice = `Juice with ${apples} apples and ${orange} orange`;
    return juice;
}

const applesOrangeJuice = fruitProccess(2);
// console.log(applesOrangeJuice);

function checkAge(age) {
    if (age < 18) {
        return "To young";
    } else {
        return "Access granted";
    }
}

let age = checkAge(25);
// console.log(age);


const x = findMax(1, 123, 500, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// console.log(x);

// const y = sumAll(1, 123, 500, 115, 44, 88)
function sumAll() {
    let sum = 0; 
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
        console.log(arguments[i]);
    }
    return sum;
}
// console.log(y);



//Standard Function

function multiply(a, b) {
    return a * b;
}

// const a = multiply(2, 3);
// console.log(a);


// Function Expression

const multiplies = function (a, b) {
    return a * b;
};

// const b = multiplies(5, 6);
// console.log(b);



const division = function (a, b) {
    return a / b;
};

// const c = division(10, 2);
// console.log(c);

const add1 = function (a, b) {
    return a + b;
};

// const e = add(2 + 3);
// console.log(e);


function run(fn) {
    return fn(`Hello! I'm nasif`, `Thanks! Good Bye!`);
}

const sayHello1 = function (hello,bye) {
    return `${hello} and ${bye}`;
};

// const d = run(sayHello1);
// console.log(d);

const myFunction = (x, y) => { x * y };

// const myF = myFunction(2, 3);
// console.log(myF);

// const myFuncti = (x, y) =>  return x * y;
// const MyFun = myFuncti(2, 3);
// console.log(MyFun);

// Use this keyword in normal function.
const person = {
    name: "John",
    greet: function () {
        return this.name;
    }
};

// console.log(person.greet());

// Use this keyword inside the arrow function and this will give output unexpected result.
const person1 = {
    name: "John",
    greet: () => {
        return this.name;
    }
};

// console.log(person1.greet())
*/

const fruitsSlices = (fruits) => {
    return fruits * 4;
}


const fruitProcessors = function (apples, oranges) {
    const appleSlice = fruitsSlices(apples);
    const orangeSlice = fruitsSlices(oranges);
    return `Juice with ${appleSlice} of apple and ${orangeSlice} of orange`
}

// const fruit = fruitProcessors(2, 3);
// console.log(fruit);


// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// const z = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(z);



const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
