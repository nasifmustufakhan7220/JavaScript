// let txt1 = "Hello, world";
// let txt2 = "World";

// // console.log(txt1, txt2);

// // console.log(txt1.split(','));

// const statement = 'I am a hard working person';

// let arr = statement.split(' ');
// // console.log(arr);
// // arr.reverse();
// let reverse= "";
// for (const value of arr) {
//     // console.log(value);
//     // reverse = value + reverse;
//     reverse = value.concat(" ", reverse);
// }
// // console.log(reverse);

// let text = "How are you doing today?";

// let myArr = text.split("o");
// let word = myArr[1];
// console.log(myArr);


// let txt = "Hello world!";
// let txt1 = "Hello Computer";

// console.log(txt.concat(" ", txt1));


// const sentence = "JavaScript is very interesting";

// const convertedArr = sentence.split(" ");

// console.log(convertedArr);

// const fruits = "apple,banana,mango,orange";

// let fruitsArr = fruits.split(" ");
// console.log(fruitsArr);

// const arr1 = ['apple', 'banana', 'mango','orange'];
// const arr2 = ['apple', 'banana', 'mango','orange'];

// console.log(arr1.concat(arr2));

// const name = "Nasif";

// console.log(name.split(""));


// const a = ["HTML"];
// const b = ["CSS"];
// const c = ["JavaScript"];

// const z = a.concat(b).concat(c);
// console.log(z);


// const sentence = "I love JavaScript programming";

// let sentenceArr = sentence.split(" ");

// const extra = ["very", "much"];


// console.log(sentenceArr.concat(extra));



// const sentence = "JavaScript is fun to learn";

// let SentenceArr = sentence.split(" ");

// console.log(SentenceArr.length);

// let i = 0;
// for (const value of SentenceArr) {
//     console.log(value, i);
//     i++;
// }
// console.log(i);


// const data = "10,20,30,40,50";

// let dataArr = data.split(",");



// const sentence = "I love coding";

// const sentenceArr = sentence.split(" ");
// let reverse = "";
// for (const value of sentenceArr) {
//     reverse = value.concat(" ", reverse);
// }

// console.log(reverse);


// const email = "student@gmail.com";

// let emailArr = email.split("@");
// console.log(emailArr);



// const firstNames = ["Nasif","John"];
// const lastNames = ["Khan", "Smith"];

// let special = (a,b) => {
//     return a.concat(" ",b);
// }
// let add = [];
// let index = 0;
// for (const value of firstNames) {
//     add.push(special(value, lastNames[index]));
//     index++;
// }

// console.log(add);

const sentence = "apple banana mango";

let sentenceArr = sentence.split(" ");
let add = [];
for (const value of sentenceArr) {
    add.push(value.toUpperCase());
}
console.log(add);