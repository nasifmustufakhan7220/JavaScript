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

// const sentence = "apple banana mango";

// let sentenceArr = sentence.split(" ");
// let add = [];
// for (const value of sentenceArr) {
//     add.push(value.toUpperCase());
// }
// console.log(add);


// let text = "Hello world, welcome to the universe.";
// console.log(text.includes('the'));

// let result = text.includes("","welcome");
// console.log(result);

// let result = text.replace("Hello", "Hi");
// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace('blue', "red");
// console.log(result);

// let emoji = '😂😂'
// let result = emoji.split(/(?:)/);
// let result = emoji.split(/(?:)/u);
// console.log(result);

// const emptyString = "";
// console.log(emptyString.split("a"));
// console.log(emptyString.split(emptyString));

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// let results = paragraph.replace("Ruth's", "my");
// const regex = /dog/i;
// let result = paragraph.replace(regex, "ferret");

// let text = "foo";
// let result = text.replace(/(f)/, "$2");
// console.log(result);



// const replacer = (match, p1, p2, p3, offset, string) => {
//     return [p1, p2, p3].join('-');
// }

// const newString = "abc12345#$*%";

// let result = newString.replace(/(\D*)(\d*)(\W*)/, replacer);
// console.log(result);

// const re = /(\w+)\s(\w+)/;
// const str = "Maria Cruz Alo";
// const newStr = str.replace(re, "$3, $2, $1");
// console.log(newStr);


// let text = "Mr Blue has a blue house and a blue car";

// let result = text.replace(/blue/gi, 'red');

// console.log(result);


// let text = "Mr Blue has a blue house and a blue car";

// let result = text.replace(/blue|house|car/gi, function (x) {
//     return x.toUpperCase();
// });

// console.log(result);

