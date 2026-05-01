// let arr = [1, 2, 3, 4];
// let arr = [10, 20, 30];
let arr = [1, 2, 3];
// let arr = [2, 4, 6];

const doubleNumbers = arr.map(x => x *2);
const add5 = arr.map(x => x + 5);
const convertToStr = arr.map(x => x + "");

const convertWithaddedSpecialChar = arr.map((x) => {
    const convertStr = x.toString();
    return `${convertStr}!`;
})

const converter = arr.map(x => "Item-" + x);
// console.log(doubleNumbers);
// console.log(add5);
// console.log(convertToStr);
// console.log(convertWithaddedSpecialChar);
// console.log(converter);