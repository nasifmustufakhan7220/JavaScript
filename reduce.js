/**
 * make one result from many values
 * 🧠 Simple thinking

👉 array → one value

Examples:

numbers → sum
array → object
array → single value
 * 🧠 Meaning (VERY SIMPLE)
acc = box (stores result) 📦
curr = current item
 */

let numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) =>{
    return acc + curr;
}, 0);


let words = ["I", "love", "JS"];

const sentence = words.reduce((acc, curr) =>{
    return `${acc} ${curr}`;
}, "");



const arr = ["a", "b", "c"];

const obj = arr.reduce((acc, currValue) => {
   acc[currValue] = true;
   return acc;
}, {});


let people = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 25}
];


let grouped = people.reduce((acc, currPerson) => {
    let age = currPerson.age;
    
    if(!acc[age]){
        acc[age] = [];
    }

    acc[age].push(currPerson);
    return acc;
}, {});

console.log(grouped);