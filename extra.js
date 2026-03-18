// let price = 1000;
// const isLeader = true;

// price = isLeader === true ? price > 500 ? price = price / 2 : price = 0 : price = price + 1000;

// console.log(price);


// const fruits = ['apple', 'banana', 'orange', 'water-malon', 'cherry'];

// for (let i = 0; i < fruits.length; i++){
//     // console.log(fruits[i]);
//     // console.log(fruits.indexOf(fruits[i]));
//     if (fruits.indexOf(fruits[i]) === 3) {
//         console.log(fruits[i]);
//     };
//     if (fruits.indexOf(fruits[i]) == 2) {
//         fruits[i] = 'jambura';
//     };
    
// };
// console.log(fruits);


// const tourist = ['Bangladesh', 'New Zealand', 'Palistine'];
// tourist.push('Gaza');


// const newTourist = ['Maddina', 'Makka'];
// for (let i = 0; i < newTourist.length; i++){
//     tourist.push(newTourist[i]);
//     // console.log(tourist);
//     // console.log(tourist.lastIndexOf(newTourist[i]));
//     if (tourist.lastIndexOf(newTourist[i]) == 5) {
//         tourist.pop();
        
//     }
// };
// console.log(tourist);



// const books = ['Eman', 'Akhidah', 'Rijikh'];

// if (books.includes('javascript')) {
//     console.log("Present in the array")
// }
// else {
//     console.log('Not present in the array');
// }


// const data1 = ['alu', 'tomato', 'peyaj'];
// const data2 = ['rowsun', 'morich', 'pudinah'];

// let mixed = data1.concat(data2);
// console.log(data1,'\n',data2,'\n', mixed);


// let num = 1;

// while (num <= 60) {
//     console.log(num,"I will invest at least 6 hrs every single day for next 60 days!");
//     num++;
// }


// let num = 61;
// while (num <= 100) {
//     if (num % 2 != 0) {
//         console.log(num);
//     }
//     num++;
// }

// let num = 78;
// while (num <= 98) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
//     num++;
// }


// let num = 1;

// while (num <= 10) {
//     console.log(5 * num);
//     num++
// }


// let num = 21;

// while (num >= 15) {
//     console.log(num);
//     num--;
// }


// let i = 10;
// while (i < 15) {
//     i++;
//     if (i % 5 !== 0) {
//         continue;
//     };
//     console.log(i);
    
// }


// let i = 1;
// let sum = 0;
// while (i) {
//     sum += i;
//     if (sum >= 100) {
//         break;
//     }
//     i++;
// }
// console.log(sum);

// let i = 2;
// function isSquare(i) {
//     let root = Math.sqrt(i);
//     return Number.isInteger(root);
// }
// while (i < 20) {
//     if(isSquare(i)){
//         console.log(i);
//         break;
//     };
//     i++;
// }



// const login = (num, limit, compare) => {
//     let i = num;
//     let x;
//     while (i < limit) {
//     let login = Number(prompt("Enter your password: "));
//     if (login === compare) {
//         x = ("You are successfully login");
//         break;
//     };
//     i++;
//     }
//     if (typeof x !== typeof undefined) {
//         return x
//     } else {
//         return `You are kicked out`
//     }
// }

// console.log(login(0, 3, 1234));



//^ Array is a mutable dataType and String is a Immutable dataType. Because we easily chnage elements of an array, but we can not ever change any string elements. Here is the prove :

// const numbers = [22, 23, 556, 25, 26];
//console.log(numbers); // ^ [ 22, 23, 556, 25, 26 ]===> It is the original array's elements before chnaging .

// numbers[2] = 24;

//console.log(numbers); // ^ [ 22, 23, 24, 25, 26 ]======> It is the new array's elements after chaning it.



// ? String


const capital = "Dhaka";
//console.log(capital);  // ^ Dhaka ====> It is the original string's elements before chnaging .



capital[0] = 'F';
//console.log(capital); // ^ Dhaka ====> It is the original string's elements after chnaging.


const address = 'Muktarpara';

// console.log(address.slice(0, 6));
// console.log(address.substring(1, 7));

// console.log(address.split(','));
const addArr = ['Muktarpara'];
// console.log(addArr.join());


const sentence = 'I am learning Web Development.';
/* 
? let reverse = '';

? for (const revSen of sentence) {
    // console.log(revSen);
    ? reverse = revSen + reverse;
? }
? console.log(reverse);
*/


// ? let reverse = '';
// * for (let i = 0; i < sentence.length; i++){
//  &   reverse = sentence[i] + reverse;
// }
// ! console.log(reverse);


// const reverse = sentence.split('').reverse().join('');
// console.log(reverse);




// for (const key in mobile) {
//     // console.log(key);
//     // console.log(key, ":",mobile[key]);
// }

// const mobile = {
//     brand: 'Sawmi',
//     price: 16999,
//     camera: '12 mgpxl',
//     isNew: false
// };

// const keys = Object.keys(mobile);

// for (const [index, key] of keys.entries()) {
//     console.log("Index =", index, "Key =", key, "Value =", mobile[key]);
// }

// keys.forEach((key, index) => {
//     console.log("Key =", key, "", "index =", index, "", "Value =", mobile[key]);
// })
// // const keys = Object.keys(mobile);
// console.log("=== Basic for loop ===");

// for (let i = 0; i < keys.length; i++){
//     console.log("index[i] =", i);
//     console.log("Keys[i] =", keys[i]);
// }

// console.log("=== for...in loop ===");

// for (const key in keys) {
//     console.log("Key =", key);
//     console.log("Keys[key] =", keys[key]);
// }

// console.log("=== for...of loop");

// for (const key of keys) {
//     console.log("Key =", key);
//     console.log("mobile[key] =", mobile[key]);
// }




// const keys = Object.keys(mobile);


// for (let i = 0; i < keys.length; i++){
//     console.log(keys[i]);
// }

// for (const key in mobile) {
//    console.log(mobile[key]);
// }

// for (const key of mobile) {
//   console.log(key);
// }


// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// for (const key in colors) {
//     if (colors[key] === colors["golden rod"]) {
//         console.log(colors[key]);
//         break;
//     }
// }


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
}

for (const key in car) {
    if (car[key] === car.year) {
        car['passenger capacity'] = 5;
    }
    
}
// console.log(car);


// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// for (const key in student) {
//     if (student[key] === student['physics']) {
         // console.log(student[key]);
//     }
// }

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count=0;
for (const key in student) {
    if (key) {
        count = count+1;
    }
}
// console.log(count);


// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (const key in myObject) {
//     console.log(`key: ${key} | type: ${typeof myObject[key]}`);
// }

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let newArr = [];
for (const value of colors) {
    // newArr.unshift(value);
}
// console.log(newArr);

for (const key in colors) {
    // newArr.unshift(colors[key]);
}
// console.log(newArr);

for (let i = colors.length - 1; i >= 0; i--){
    // newArr.push(colors[i]);
}
// console.log(newArr);


const numbers = [12, 98, 5, 41, 23, 78, 46];

for (const value of numbers) {
    // console.log(value);
    // if (value % 2 === 0) {
    //     newArr.push(value);
    // }
}

// console.log(newArr);

for (const key in numbers) {
    // console.log(numbers[key]);
    // if (numbers[key] % 2 !== 1) {
    //     newArr.push(numbers[key]);
    // }
}
// console.log(newArr);

for (let i = 0; i < numbers.length; i++){
    // if (numbers[i] % 2 !== 1) {
    //     newArr.push(numbers[i]);
    // }
}
// console.log(newArr);

let names = ['Tom', 'Tim', 'Tin', 'Tik'];
let newStr = "";
for (const value of names) {
    // newStr = names.join("");
}
// console.log(newStr);

const statement = 'I am a hard working person';
// console.log(statement.split(' ').reverse().join(' '));
// let word = "";
// for (const value of statement) {
//     word += value;
// }
// console.log(word.split(' ').reverse().join(' '));
let reverse = "";
for (const value of statement) {
    reverse = value + reverse;
}

// console.log(reverse);

// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    // for (let j = 0; j < arr[i].length; j++){
        // if (i === 1 && j === 0) {
            // arr[i][j] = 99;
        // }
    // }
// }
// console.log(arr);
// arr[1][0] = 99;

// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(...fruits);


// const number = [1, 2, 3];
// const num = [...number];
// for (let i = 0; i < num.length; i++){
//     if (i === 0) {
//         num[i] = 99;
//     }
// }
// let i = 0;
// for (const value of num) {
    // console.log(num[i]);
//     if (i === 0) {
//         num[i] = 99;
//     }
//     i++;
// }


// console.log(number);
// console.log(num);

// const students = [
//     { name: "John", marks: 85 },
//     { name: "Alice", marks: 90 }
// ];

// for (const value of students) {
    // console.log(value);
    // for (const key in value) {
        // console.log(value[key]);
        // console.log(value.name);
        //console.log(`${value['name']} scored ${value['marks']}`);
        // break;
    // }
// }


const multiply = (num1, num2, num3, num4) => {
    const result = num1 * num2 * num3 * num4;
    return result;
};

const multiplyDivide = (number) => {
    if (number % 2 === 1) {
        return number * 2;
    } else {
        return number / 2;
    }
}


const make_avg = (numbers, length) => {
    let sum = 0;
    for (const value of numbers) {
        sum += value;
    }
    let avg = sum / length;
    return avg;
}

const count_zero = (binaryString) => {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++){
        if (binaryString[i] === "0") count++;
    }
    return count;
}


const odd_even = (number) => {
    if (number % 2 === 0) return "Even";
    else return "Odd";
}
// const arr = [55, 57, 20, 10, 14];
// let arrlength = arr.length;
let res = odd_even(0);
// console.log(res);


const milesKm = (mile) => {
    const kilo = mile * 1.60934;
    const result = `${mile} is eqaul to ${kilo} km`;
    return result;
};

const kmMiles = (kilo) => {
    const mile = kilo / 1.609;
    const result = `${kilo.toFixed(2)} km is eqaul to ${mile.toFixed(2)} mile`;
    return result;
}


// ^A year is a leap year if it is divisible by 4, unless it is divisible by 100 but not by 400. In essence, add a day (Feb 29) to years divisible by 4, skip it for century years (e.g., 1900) unless they are divisible by 400 (e.g., 2000). This ensures a 366-day year for accuracy.

const leapYear = (year) => {
    let result;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = `${year} is a leap year`;
            }else {
                result = `${year} is not a leap year`;
            }
        } else {
            result = `${year} is a leap year`;
        }
    } else {
        result = `${year} is not a leap year`;
    }
    return result;
}

const oddAvg = (arr) => {
    const length = arr.length;
    let sum = 0;
    let avg;
    for (const value of arr) {
        // console.log(value);
        if (value % 2 !== 0) {
            // console.log(value);
            sum += value;
        }
    }
    avg = sum / length;
    return avg;
}


const removeDupli = (arr) => {
    let newArr = [];
    let exits = false;
    for (const value of arr) {
        // if (!newArr.includes(value)) {
        //     newArr.push(value);
        // }
        for (let i = 0; i < newArr.length; i++){
            if (value === newArr[i]) {
                exits = true;
                break;
            }
        }
        if (!exits) {
            newArr.push(value);
        }
    }
    return newArr;
}



const fahrenheitConvert = (celsius) => {
    const formula = (celsius * 1.8) + 32;
    let result = `The temperature is ${celsius} celsius, and the converted temperature is ${formula} fahrenheit`;
    return result;
}

const findRepeated = (arr) => {
    let num = 25;
    let count = 0;
    for (const value of arr) {
        if (num === value) {
            count++;
        }
    }
    
    return count;
}

const vowelCount = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const value of vowels) {
        for (const value1 of str) {
            if (value === value1) {
                count++;
            }
        }
    }
    return count;
}

const longestWord = (str) => {
    
}
const string = 'I am learning Programming to become a programmer';
console.log(longestWord(string));

