"use strict"

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



const login = (num, limit, compare) => {
    let i = num;
    let x;
    while (i < limit) {
    let login = Number(prompt("Enter your password: "));
    if (login === compare) {
        x = ("You are successfully login");
        break;
    };
    i++;
    }
    if (typeof x !== typeof undefined) {
        return x
    } else {
        return `You are kicked out`
    }
}

// console.log(login(0, 3, 1234));



//^ Array is a mutable dataType and String is a Immutable dataType. Because we easily chnage elements of an array, but we can not ever change any string elements. Here is the prove :

// const numbers = [22, 23, 556, 25, 26];
//console.log(numbers); // ^ [ 22, 23, 556, 25, 26 ]===> It is the original array's elements before chnaging .

// numbers[2] = 24;

//console.log(numbers); // ^ [ 22, 23, 24, 25, 26 ]======> It is the new array's elements after chaning it.



// ? String


const capital = "Dhaka";
//console.log(capital);  // ^ Dhaka ====> It is the original string's elements before chnaging .



// capital[0] = 'F';
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

// obboshoi ek ekta word er length onujaye kontate beshi length oi unujaye ber korbo.



const largestWord = (newArr) => {
    let largestWord="";
    for (const value of newArr) {
        if (largestWord.length < value.length) {
            largestWord = value;
        }
    }
    return largestWord;
}
const string = 'I am learning Programming to become a programmer';
const arr = string.split(' ');



const randomNumber = (start,max) => {
    const num1 = Math.floor(Math.random()* (max - start + 1)) + start;
    return num1;
}


const getMax = (obj) => {
    let max = -Infinity;
    let names = ""
    for (const key in obj) {
        // console.log(key, obj[key]);
        if (obj[key] > max) {
            names = key;
            max = obj[key];
        }
    }
    let result = `The delecious cake will take ${names} and his point is ${max}`;
    return result;
}
const maxObj = {
    tmi: 98,
    kim: 100,
    pim: 200,
    dim: 854
}


const num = [10.4, 5.6, 7.2, 9.8, 5.3, 6.4];
const findTallest = (arr) => {
    let tall = -Infinity;
    let small = -Infinity;
    for (const value of arr) {
        if (value > tall) {
            small = tall;
            tall = value;
        }

        if (value > small && tall > value) {
            small = value;
        }
    }
    
    return `${tall} ${small}`;
}



const priceCount = (shirtQuantity, pantQuantity, shoeQuantity) => {
    const perShirtPrice = 500;
    const perPantPrice = 400;
    const perShoePrice = 900;

    const shirt = shirtQuantity * perShirtPrice;
    const pant = pantQuantity * perPantPrice;
    const shoe = shoeQuantity * perShoePrice;

    const total = shirt + pant + shoe;
    return total;
}


const getMin = (prices) => {
    let min = prices[0].price;
    let names = "";
    for (const value of prices) {
        for (const key in value) {
            if (min > value[key]) {
                min = value[key];
                names = value['brand'];
            }
        }
    }
    return `The brand name is ${names}, which is the lowest price ${min}, but works really fine 😍`;
}

const prices = [
  { brand: "oppoA6", price: 5000 },
  { brand: "shawmi", price: 20000 },
  { brand: "realme", price: 18500 },
  { brand: "honor", price: 30000 },
  { brand: "oppo", price: 25000 },
  { brand: "oppoS6", price: -5000 },
  { brand: "oppoSss6", price: 4000 },
];



const shoppingCart = (product) => {
    let sum = 0;
    let names = "";
    for(const value of product){
        for (const key in value) {
            if (key === 'price') {
                const price = value.price * value.quantity;
                sum += price;
                names += `${value.name}  ${value.price} * ${value.quantity} `
            }
        }
    }
    return `The total of the product's (${names}) price is = ${sum} Tk.`;
}
const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'cheruni', price: 100, quantity: 3},
    {name: 'shirt', price: 300, quantity: 1},
    {name: 'pant', price: 300, quantity: 3},
];



const disCountCupon = (items) => {
    let sum = 0;
    let price;
    for (const value of items) {
        for (const key in value) {
            if (key === 'price') {
                if (value.price <= 100) {
                    price = value.price * value.quantity;
                    sum += price;
                    break;
                } else if (value.price <= 200) {
                    let disCount = value.price * 0.90;
                    price = disCount * value.quantity;
                    sum += price;
                    break;
                } else {
                    let discountAgin = value.price * 0.70;
                    price = discountAgin * value.quantity;
                    sum += price;
                    break;
                }
            }
        }
    }
    return sum;
}

const items = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'cheruni', price: 100, quantity: 3},
    {name: 'shirt', price: 300, quantity: 1},
    {name: 'pant', price: 300, quantity: 3},
    {name: 'shock', price: 150, quantity: 2},
];



const discount = (quantity) =>{
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total; 
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}


const discountCheap = (quantity) => {
    let total = [];
    for (const value of quantity) {
        for (const key in value) {
            if (key === 'quantity') {
                if (value['quantity'] <= 100) {
                    total.push(`For first100Quantity ${value['quantity'] * value['price']}`);
                }
                else if (value['quantity'] <= 200) {
                    const first100Quantity = value['quantity'] * value['price'];
                    const remainingQuantity = value['quantity'] - 100;
                    const remainingTotal = remainingQuantity * (value['price'] * 0.90);
                    total.push(`For second100Quantity ${first100Quantity + remainingTotal}`);
                }
                else {
                    const first100Quantity = value['quantity'] * 100;
                    const second100Quantity = value['quantity'] * 0.90;
                    const remainingQuantity = value['quantity'] - 200;
                    const remainingTotal = remainingQuantity * (value['price'] * 0.70);
                    total.push(`For above200Quantity ${ first100Quantity + second100Quantity + remainingTotal}`);
                }
            }
        }
    }
    return total;
}
const item = [
    {name: 'shampoo', price: 300, quantity: 52},
    {name: 'cheruni', price: 100, quantity: 30},
    {name: 'shirt', price: 300, quantity: 150},
    {name: 'pant', price: 300, quantity: 250},
];


const addition = (a, b) => {
    const sum = a + b;
    return sum;
}

const subtraction = (a, b) => {
    const sub = a - b;
    return sub;
}

const multiplication = (a, b) => {
    const mul = a * b;
    return mul;
}

const divide = (a, b) => {
    const div = a / b;
    return div;
}
const calculation = (a, b, oparation) => {
    if (oparation === 'addition') {
        const result = addition(a, b);
        return result;
    }
    else if (oparation === 'subtraction') {
        const result = subtraction(a, b);
        return result;
    }
    else if (oparation === 'multiplication') {
        const result = subtraction(a, b);
        return result;
    }
    else if (oparation === 'divide') {
        const result = subtraction(a, b);
        return result;
    }
    else {
        const result = "Invalid oparation";
        return result;
    }
}




const findLowest = (arr) => {
    let min = arr[0];
    for (const value of arr) {
        if (min > value) {
            min = value;
        }
    }
    return min;
}

const array = [167, 190, 120, 165, 137];


const smallestName = (arr) => {
    let smallName = arr[0];
    for (const value of arr) {
        if (smallName.length > value.length) {
            smallName = value;
        }
    }
    return smallName;
}

const nam = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


const calculateElectronicsBudget  = (leptopCount, tabletCount, mobileCount) => {
    const laptop = 35000 * leptopCount;
    const tablet = 15000 * tabletCount;
    const mobile = 20000 * mobileCount;

    const total = laptop + tablet + mobile;

    return total;
}

const sum = calculateElectronicsBudget(2, 1, 3);


const findAveragePhonePrice = (phone) => {
    let result = [];
    let total = 0;
    let avg;
    for (const value of phone) {
        for (const key in value) {
            if (key === 'price') {
                if (value.price <= 35000) {
                    result.push( value['price']);
                }
                else if (value['price'] <= 95000) {
                    result.push(value['price'] * 0.25);
                }
                else if (value['price'] <= 200000) {
                    result.push(value['price'] * 0.40);
                }
            }
        }
    }
    for (const value of result) {
        total += value;
    }
    avg = total / result.length;
    return avg.toFixed(2);
}

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];




const salaryCount = (employe) => {
    let currentSalary = [];
    let total = 0;

    for (const value of employe) {
        for (const key in value) {
            if (key === 'name') {
                currentSalary.push((value.increment * value.experience) + value.starting);
                break;
            }
        }
    }
    for (const value of currentSalary) {
        total += value;
    }
    return total;
}

 const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
















const cashOut = (money) => {
    if (typeof money !== 'number' || money < 0) {
        return `Invalid String`;
    }
    let cashoutCharge = 1.75;
    let totalCashOut = money * cashoutCharge/100;
    return totalCashOut;
}
const number = 999;



const validEmail = (email) => {
    const pattern = /^[-._+@]/;
    const forbiddenPattern = /[-_+]/;
        if (typeof email !== 'string') {
            return "Invalid";
        }
        else if (pattern.test(email.charAt(0)) || email.includes(" ") || forbiddenPattern.test(email)) {
            return false;
        }
        else if(email.includes("@") && email.endsWith('.com')){
            return true;
        } else {
            return false;
        }

}
const emails = "-king@yahoo.com";


const electionResult = (votes) => {
    let mango = 0;
    let banana = 0;
    if (Array.isArray(votes) === false) {
        return "Invalid String";
    }
    for (const value of votes) {
        if (value === "mango") {
            mango++;
        }
        else if (value === "banana") {
            banana++;
        }
    }
    if (mango > banana) {
        return "mango"
    }
    else if (banana > mango) {
        return "banana"
    }
    else if (mango === banana) {
        return "Draw";
    }
};

const elc = ["mango", "BananA", "na vote", "na vote"];


const isBestFriend = (friend1, friend2) => {
    if (typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return 'Invalid String';
    }
    for (const key in friend1) {
        for (const key1 in friend2) {
            if (friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

const frnd1 = { name: "hashem", roll: 1, bestFriend: 2 }; 
const frnd2 = { name: "kashem", roll: 2, bestFriend: 1 };


const calculateWatchTime = (times) => {
    if (!Array.isArray(times)) {
        return "Invalid String"
    }
    let sum = 0;
    for (const value of times) {
        if (typeof value !== 'number') {
            return "Invalid String";
        }
        sum += value;        
    }
    let hours = Math.floor(sum / 3600);
    let minutes = Math.floor((sum % 3600) / 60);
    let seconds = sum % 60;
    return `{hour: ${hours}, minute: ${minutes}, second: ${seconds} }`
}
const time = [100, 99, 119, 300];

const calculateVate = (amount) => {
    if (amount < 0 || typeof amount !== 'number') {
        return "Invalid";
    }
    const vat = amount * 7.5 / 100;
    return vat;
}
const price = "foo";

const validContact = (number) => {
    if (typeof number !== 'string') {
        return "Invalid";
    }
    else if (number.length !== 11) {
        return false;
    }
    else if (number.startsWith("01") && !number.includes(" ")) {
        return true;
    } else {
        return false;
    }

}

const phoneNumber = true;



const willSuccess = (marks) => {
    let pass = 0;
    let fail = 0;
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    for (const value of marks) {
        if (value >= 50) {
            pass++;
        }
        else {
            fail++;
        }
    }

    if (pass > fail) {
        return true;
    }
    else {
        return false;
    }
}

const nums = 90;




const validProposal = (obj1, obj2) => {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null || Array.isArray(obj1) || Array.isArray(obj2)){
        return "Invalid";
    }

    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    for (const value of keys) {
        if(obj1['gender'] !== obj2['gender']){
            if(Math.abs(obj1['age'] - obj2['age']) <= 7){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}

const person1 = {
    name: "Rahul", gender: 'male', age: 24
};
const person2 = {
    name: "Joya", gender: 'female', age: 32
};

const calculateSleepTime = (times) =>{
    if(!Array.isArray(times)){
        return "Invalid";
    }
    let sum = 0;

    for(const value of times){
        if(typeof value !== 'number'){
            return "Invalid";
        }
        sum += value;
    }
    const hours = Math.floor(sum / 3600);
    const minutes = Math.floor((sum % 3600) / 60);
    const seconds = sum % 60;
    return `{hours : ${hours}, minute: ${minutes}, second: ${seconds}`;
}

const timeC = [1000, 38000, '900'];


const totalFine = (fare) => {
    if (fare <= 0 || typeof fare !== 'number') {
        return "Invalid";
    }
    else {
        const totalFine = fare + (fare * 0.20) + 30;

        return totalFine;
    }
}

const amount = true;



const onlyCharacter = (str) => {
    if (typeof str !== "string") {
        return "Invalid";
    }
    else {
        const remover = str.replaceAll(/[\s]/g, '').toUpperCase();
        return remover;
    }
}

const str = " ha ck m e 1 @ru.c n ";


const bestTeam = (player1, player2) => {
    let scoreA = 0;
    let scoreB = 0;
    const expectedTypes = {
        name: "string",
        foul: "number",
        cardY: "number",
        cardR: "number"
    };
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    for (const key in expectedTypes) {
        if (typeof player1[key] !== expectedTypes[key] || typeof player2[key] !== expectedTypes[key]) {
            return "Invalid";
        }
    }

    for (const key in player1) {
        if (player1['name']) {
            scoreA = player1['foul'] + player1['cardY'] + player1['cardR'];
        }
        if (player2['name']) {
            scoreB = player2['foul'] + player2['cardY'] + player2['cardR'];
        }
    }

    if (scoreA < scoreB) {
        return player1['name'];
    }
    else if (scoreB < scoreA) {
        return player2['name'];
    }
    else if (scoreA === scoreB) {
        return "Tie";
    }
}

const obj1 = {name: "Germany", foul: 10, cardY: 1, cardR: 1};
const obj2 = { name: "Sweden", foul: 10, cardY: 2, cardR: 1 };



const isSame = (arr1, arr2) => {
    
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) { 
        return false;
    }

    // let index = 0;
    // for (const value of arr1) {
    //     if (value !== arr2[index]) {
    //         return false;
    //     }
    //     index++;
    // }

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
    
}

const sameArr1 = [1, undefined, 3];
const sameArr2 = [1, null, 3];




const resultReport = (arrNumbers) => {
    if (!Array.isArray(arrNumbers)) {
        return "Invalid";
    }
    let pass = 0;
    let fail = 0;
    let finalScore;
    let sum = 0;
    for (const num of arrNumbers) {
        if (num >= 40) {
            pass++;
        }
        else {
            fail++;
        }
        sum += num;
    }
    finalScore = Math.round(sum / arrNumbers.length);
    return `{finalScore: ${finalScore}, pass: ${pass}, fail: ${fail}}`;
}

const numArr = 100;


const calculateDiscount = (price) => {
    let result;
    if (typeof price !== "number" || price < 0) {
        return "Invalid";
    }
    else if (price >= 1000) {
        let discount = price * 0.20;
        result = price - discount;
    }
    else if (price >= 500) {
        let discount = price * 0.10;
        result = price - discount;
    }
    else {
        result = price;
    }
    return result;
}

const priceD = 500;




const countVowels = (str) => {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let vowels = "aeiouAEIOU";

    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let inputString = "bAngladesh";



const reverseWords = (str) => {
    if (typeof str !== "string") {
        return "Invalid";
    }
    // let result="";
    // for (const char of str) {
    //     result = char + result;
    // }
    // return result;

    let words = str.split(" ");
    let result = [];
    
    for (const word of words) {
        let reversed = "";

        for (const char of word) {
            reversed = char + reversed;
        }
        result.push(reversed);
    }
    return result.join(" ");
}

const sen = "Hello world";


const maxNumber = (numbers) => {
    if (!Array.isArray(number)) {
        return "Invalid";
    }
    let max = -Infinity;
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}




const minNumber = (numbers) => {
    if (!Array.isArray(number)) {
        return "Invalid";
    }

    let min = numbers[0];

    for (const number of numbers) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}



const evenOddCount = (arrs) => {
    if (!Array.isArray(arrs)) {
        return "Invalid";
    }
    let even = 0;
    let odd = 0;
    for (const arr of arrs) {
        if (arr % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }
    let result = `{even: ${even}, odd: ${odd}}`;
    return result;
}

const numberArr = [10, 5, 3];


const removeDuplicates = (arrs) => {
    let isDuplicate = false;
    let newArr = [];
    for (const value of arrs) {
        if (!newArr.includes(value)) {
            newArr.push(value);
        }
        else {
            continue;
        }
    }
    console.log(newArr);
    
}

const Arr = [1, 2, 2, 3, 4, 4];



const generateUserName = (nameStr) => {
    if (typeof nameStr !== "string") {
        return "Invalid";
    }

    if (nameStr.includes(" ")) {
        let result = nameStr.replace(/\s/g, '').toLowerCase();
        return result;
    }

}

const fullName = "Shah Srabon";

const formatEmail = (emails) => {
    if (typeof emails !== "string") {
        return "Invalid";
    }

    let regex = /^.+@gmail.+$/;
    let spaceRemoved = "";
    if (emails.includes(" ")) {
       spaceRemoved = generateUserName(emails);
    }
    if (spaceRemoved.endsWith('.com')) {
        if (regex.test(spaceRemoved)) {
            return spaceRemoved;
        }
        else {
            return "Invalid emails";
        }
    }
    
}

const emailId = "   NasifmUstufaK Han98@gmaiL.com ";




const evenAverage = (numbers) => {
    if (!Array.isArray(numbers)) {
        return "Invalid";
    }
    let sum = 0;
    let avg;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }

    avg = Math.round(sum / numbers.length);
    return avg;
}

const arrNum = "hello";


const longestWord = (str) => {
    if (typeof str !== "string") {
        return "Invalid";
    }

    const strSplits = str.split(' ');
    let highestLength = strSplits[0];
    for (const str of strSplits) {
        if (str.length > highestLength.length) {
            highestLength = str;
        }
    }
    return highestLength;
}
const strCount = "I love JavaScript Programming nasifmustuf";


const countPosNeg = (arrs) => {
    if(!Array.isArray(arrs)){
        return "Invalid";
    }
    let positiveNumberCounter = 0;
    let negativeNumberCounter = 0;

    for(const arr of arrs){
        if(arr > 0){
            positiveNumberCounter++;
        }
        else if(arr < 0){
            negativeNumberCounter++;
        }
    }

    return `{positive: ${positiveNumberCounter}, negative: ${negativeNumberCounter}}`;
}

const posNegNum = [1, -2, 3, -4, 0];



const repeatString = (str,num) =>{
    if(typeof str !== "string" || typeof num !== "number" || num < 0){
        return "Invalid";
    }
    let emptyString = "";
    for(let i = 0; i < num; i++){
        emptyString += str;
    }
    return emptyString;
}

const value1 = "hi";
// for(let i = 0; i < value1.length; i++){
//     console.log(value1);
// }
const value2 = 3;



const cleanUserName = (str) => {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let cleaned = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned;
}


const totalEvenFine = (arr) => {
    if (!Array.isArray(arr)) {
        return "Invalid";
    }
    let evenFineSum = 0;
    for (const ar of arr) {
        if (ar % 2 === 0) {
            let fine = ar * 0.10;
            let total = ar + fine;
            evenFineSum += total
        }
    }
    return evenFineSum;
}
const evenFine = [100, 155, 200];


const divideArray = (arr, diviser) => {
    if (!Array.isArray(arr) || diviser <= 0) {
        return "Invalid";
    }
    let newArr = [];
    for (const value of arr) {
        let divided = value / diviser;
        newArr.push(divided);
    }
    return newArr;
}

const dividedArr = [10, 20, 30];
const divisor = 0;


// spread operator means that, value gulu ke bichaiya dewa. 
let str1 = "Nasif Khan";
let str2 = [...str1, 1,2];
// console.log(str1,str2);



const numS = [1, 2, 3, 4, 5];

const doubled = numS.map((x) => {
    const result = x * 2;
    return result;
});



const numStr = [1, 2, 3, 4, 5];

const covertStr = numStr.map((x) => {
    const result = x.toString();
    return result;
})


const name = ["Nasif", "John", "Sara"];

const sayHello = name.map(name => `Hello ${name}`);

const words = ["apple", "banana", "kiwi"];

const wordLength = words.map(x => x.length);

const fruits = ["apple", "mango", "banana"];

const fruitsUpper = fruits.map(x => x.toUpperCase());

const itemS = ["pen", "book", "eraser"];

const itemIndex = itemS.map((value, index) =>{
    const result = `${index} : ${value}`;
    return result;
})


const users = [
  { name: "Nasif", age: 20 },
  { name: "John", age: 25 },
  { name: "Sara", age: 22 }
];

const userNames = users.map(x => x.name);


const products = [
  { name: "Phone", price: 100 },
  { name: "Laptop", price: 1000 }
];

const productsAdd = pro
console.log(userNames);