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


const number = parseInt(prompt("Enter a number: "));
let countDown = (number) => {
    for (let i = number; i >= 0; i--){
        console.log(i);
    }
}

if (number < 0 || isNaN(number)) {
    console.log("Please enter a positive number");
} else {
    countDown(number);
}

