let arr = [5, 15, 8];
let arr1 = ["a", "b", "c", "d"];
let people = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 25}
];

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

console.log(groupByAge);