// const favourite = Number(prompt("Enter you'r favourite number: "));

// if (favourite === 23) {
//     console.log("23 is an amazing number!")
// } else if (favourite === 7) {
//     console.log("7 is another cool number!");
// } else if (favourite === 9) {
//     console.log("9 is also a greate number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) {
//     console.log("Why not 23")
// }


// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense ||  hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive....')
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive....');
// }



// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolpins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy')
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
 
// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else {
//   console.log('Both win the trophy');
// }

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));


// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const country = prompt("Enter your prefarable country name: ");
// const language = prompt("Enter your preferable language: ");
// const population = Number(prompt("Enter population "));
// const noIsland = false;


// if (language === "english" && population < 50 && !noIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`)
// }




// const day = prompt("Enter a day");

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");



// const language = prompt("Enter a language: ");


// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log('MOST number of native speakers!');
//     break;
//   case "spanish":
//     console.log('2nd place in number of native speakers');
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log('Number 4');
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

let day;

switch (new Date().getDay()) { //getDay() method returns the weekday as a number between 0 and 6.  Exam: (sun=0,mon=1,tues=2)
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thurday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid";
}

// console.log(day);


let txt;
switch (new Date().getDay()) {
  case 6:
    txt = "Today is Saturday";
    break;
  case 0:
    txt = "Today is Sunday";
    break;
  default:
    txt = "Looking forward to the Weekend";
}

// console.log(txt);

let txt1;

switch (new Date().getDay()) {
  default:
    txt1 = "Looking forward to the Weekend";
    break;
  case 6:
    txt1 = "Today is Saturday";
    break;
  case 0:
    txt1 = "Today is Sunday";
}
// console.log(txt1)


let x;

switch (new Date().getDay()) {
  case 4:
  case 5:
    x = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    x = "It is Weekend";
  default:
    x = "Looking forward to the Weekend";
}
// console.log(x);


const age = 16;
const text = (age < 18) ? "Minor" : "Adult";

// console.log(text);

const isMember = false;
const discount = !isMember ? 0.2 : 0;
// console.log(discount);


const population = 30;

const country = "Bangaldesh";

const averagePopulation = `${country}'s population is ${population > 33 ? 'above' : 'below'} average`;

// console.log(averagePopulation);


// const bill = 430;
// const tip1 = bill * (15 / 100);
// const tip2 = bill * (20 / 100);

// /* Write your code below. Good luck! 🙂 */

// const tip = `The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? Number(tip1) : Number(tip2)}, and the total value ${(bill >= 50 && bill <= 300) ? tip1 + bill : tip2 + bill}`;

// console.log(tip);

// const bill = Number(prompt("Enter a bill: "));


const tipFunc = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

// console.log(`The bill was ${bill}, the tip was ${tipFunc(bill)}, and the total value ${bill + tipFunc(bill)}`);




// const number = parseInt(prompt("Enter a number: ")| 0);
// console.log(number);

// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// const number = parseInt(prompt("Enter a valid Number: "), 10);
// let sum = 0;

// if (isNaN(number) || number < 1) {
//     console.log("Please enter a positive number");
// } else {

//         for (let i = 1; i <= number; i++){
//         sum = sum+i;
//         }
// }
// console.log(sum)


// const number = parseInt(prompt("Enter a number: "));
// let countDown = (number) => {
//     for (let i = number; i >= 0; i--){
//         console.log(i);
//     }
// }

// if (number < 0 || isNaN(number)) {
//     console.log("Please enter a positive number");
// } else {
//     countDown(number);
// }




// const userAge = Number(prompt("Enter you'r age: "));


// const ageCal = (userAge) => {
//   if (isNaN(userAge)) {
//   return `${userAge} your age category is Invalid`;
// } else if (userAge < 0) {
//   return `${userAge} your age category is Invalid`;
// } else if (userAge >= 0 && userAge <= 12) {
//   return `${userAge} your age category is a child`;
// } else if (userAge >= 13 && userAge <= 19) {
//   return `${userAge} your age category is Teenager`;
// } else if (userAge >= 20 && userAge <= 59) {
//   return `${userAge} your age category is Adult`;
// } else {
//   return `${userAge} your age category is Senior`;
// }
// }

// const Age = ageCal(userAge);
// console.log(Age);



// const score = Number(prompt("Enter your score from 0 to 100. "));

// let grade;


// const passFail = (grades) => {
//   let status = '';

//   if (grades >= 60) {
//     return `${status = 'Pass'}`;
//   } else {
//     return `${status = 'Fail'}`
//   }
// }


// const gradeCal = (score) => {

//   if (isNaN(score)) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'Invalid'}
//     Status : Your score is Invalid make sure you press numbers not strings.`;
//   }
//   else if (score < 0 || score > 101) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'Invalid'}
//     Status : Invalid status`
//   } else if (score >= 90 && score <= 100) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'A'}
//     Status : ${passFail(score)}`
//   } else if (score >= 80 && score <= 89) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'B'}
//     Status : ${passFail(score)}`
//   } else if (score >= 70 && score <= 79) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'C'}
//     Status : ${passFail(score)}`
//   } else if (score >= 60 && score <= 69) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'D'}
//     Status : ${passFail(score)}`
//   } else if (score >= 0 && score <= 59) {
//     return `
//     Score : ${score}
//     Grade : ${grade = 'F'}
//     Status : ${passFail(score)}`
//   } else {
//     return `Invalid score`;
//   }
// };

// const mark = gradeCal(score);
// console.log(mark);


// const userName = prompt("Enter your user name: ");
// const userPassword = prompt("Enter your password: ");

// const login = function (name, password) {
//   if (name === 'admin' && password === '12345') {
//     return `Login Successful`;
//   } else if (name !== 'admin' && password !== '12345'){
//     return `Username and password are incorrect`;
//   }else if (name !== 'admin') {
//     return `Incorrect username`;
//   } else if (password !== '12345') {
//     return `Incorrect password`;
//   } else {
//     return `Invalid input`;
//   }
// };


// let authLogin = login(userName,userPassword);

// console.log(authLogin);


//JavaScript test() method.

const password = prompt("Enter your password: ");

const regexPattern = /^[A-Za-z0-9]+$/;

const pass = function (password, regx) {
  if (password.toString().length < 1) {
    return `Invalid`;
  }
  else if (password.toString().length < 6) {
    return `Weak password`;
  } else if (password.toString().length <= 7) {
    return `Medium password`;
  } else if (password.toString().length >= 8 && regx.test(password)) {
    return `Strong password`;
  } else {
    return `Sweet`;
  }
}

let passCheck = pass(password, regexPattern);
console.log(passCheck);