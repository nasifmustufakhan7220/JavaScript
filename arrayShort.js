const months = ["March", "Jan", "Feb", "Dec"];

// let result = months.sort();
// console.log(months, result);

// const array = [1, 30, 4, 21, 100000];

// array.sort();
// console.log(array);


// function compareFn(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(compareFn(11, 11));

// const stringArray = ["Blue", "Humpback", "Beluga"];

// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ["80", "9", "700"];
// const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

// const compareNumbers = (a, b)=>{
//     return a - b;
// }


// console.log(stringArray.join());
// console.log(stringArray.sort());

// console.log(numberArray.join());
// console.log(numberArray.sort());
// console.log(numberArray.sort(compareNumbers));

// console.log(numericStringArray.join());
// console.log(numericStringArray.sort());
// console.log(numericStringArray.sort(compareNumbers));

// console.log(mixedNumericArray.join());
// console.log(mixedNumericArray.sort());
// console.log(mixedNumericArray.sort(compareNumbers));


const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
// function compare(a, b) {
//     return a.value - b.value;
// }

// let res = items.sort((a, b) => {
//     return compare(a, b);
// });

// console.log(res);

// let res = items.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) {
//         return -1;
//     } else if (nameA > nameB) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(res);

function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu();