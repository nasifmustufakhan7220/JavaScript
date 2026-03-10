let txt1 = "Hello, world";
let txt2 = "World";

// console.log(txt1, txt2);

// console.log(txt1.split(','));

const statement = 'I am a hard working person';

let arr = statement.split(' ');
// console.log(arr);
// arr.reverse();
let reverse= "";
for (const value of arr) {
    // console.log(value);
    // reverse = value + reverse;
    reverse = value.concat(" ", reverse);
}
// console.log(reverse);

let text = "How are you doing today?";

let myArr = text.split("o");
let word = myArr[1];
console.log(myArr);