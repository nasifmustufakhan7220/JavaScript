let arr = [3, 7, 2, 9];
let arr1 = ["a", "b", "c", "d"];
let arr3 = [10, 20, 30];
let people = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 25}
];

const sum = arr3.reduce((acc, curr)=>{
    return acc+curr;
}, 0)
// console.log(sum);
const findedMax = arr.reduce((acc, curr) =>{
    return (acc < curr) ? curr : acc;
}, 0)

const countItems = arr1.reduce((acc, curr, currentIndex, arr) => {
    return acc = currentIndex + 1;
},0)

const groupByAge = people.reduce((acc,curr) => {

    
    let age = curr.age;
    if(!acc[age]){
       acc[age] = [];
    }
    acc[age].push(curr);
    return acc;
}, {})

let arr2 = [1, 2, 2, 3, 3, 3, 3, 2];
const countFrequency = arr2.reduce((acc, curr) =>{ 

    if(acc[curr]){
        acc[curr] ++;
    }else{
        acc[curr] = 1;
    }
    return acc;
}, )

console.log(countFrequency);