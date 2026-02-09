'use strict';

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
console.log(age);