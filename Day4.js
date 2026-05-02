let users = [
  {name: "A", age: 18},
  {name: "B", age: 25},
  {name: "C", age: 30}
];

const filteredUsers = users.filter(x => x.age > 20);

const passedUsers = filteredUsers.map(x => x.name);


let cart = [
  {item: "pen", price: 10},
  {item: "book", price: 50},
  {item: "bag", price: 100}
];

const totalPrice = cart.reduce((acc, curr) =>{
    acc = acc + curr.price;
    return acc;
}, 0);

let nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter(x => x % 2 ===0);
const evenTotal = evenNums.reduce((acc, curr) =>{
    acc = acc + curr;
    return acc;
}, 0)

let people = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 25},
  {name: "D", age: 25},
  {name: "E", age: 25}
];

const groupByAge = people.reduce((acc, curr) =>{
    
    let age = curr.age;

    if(!acc[age]){
        acc[age] = [];
    }
    acc[age].push(curr);
    return acc;
}, {})

const groupCount = people.reduce((acc, curr) =>{
    let age = curr.age;

    if(acc[age]){
        acc[age]++;
    }
    else{
        acc[age] = 1;
    }
    return acc;
}, {})



let words = ["I", "love", "JavaScript"];

const buildSentence = words.reduce((acc, curr) =>{   
    acc = `${acc} ${curr}`;
    return acc;
}, "");

const total = cart.reduce((acc, curr) =>{
    let price = curr.price;
    if(price > 50){
        let discount = price * 0.10;
        price = price - discount;
    }
    acc = acc + price;
    
    return acc;
}, 0)



let cart1 = [
  {item: "pen", price: 10, quantity: 2},
  {item: "book", price: 50, quantity: 1},
  {item: "bag", price: 200, quantity: 1},
  {item: "shoes", price: 80, quantity: 2}
];

const totalAmount = cart1.reduce((acc, curr) =>{
    let price = curr.price;
    let quantity = curr.quantity;
    
    let itemTotal  = price * quantity;
    if(quantity >= 2){
        let discount = itemTotal * 0.05;
        itemTotal = itemTotal - discount;     
    }
    if(price > 70){
        let discount = itemTotal * 0.10;
        itemTotal = itemTotal - discount;
    }
    acc = acc + itemTotal;
    return acc;
}, 0)
let totalPay;
if(totalAmount > 200){
    let vip = totalAmount * 0.10;
    totalPay = totalAmount - vip;
}else{
    totalPay = totalAmount;
}









let num = [5,5,2,2,4,4,4,4,1,1,1,1,1,0,0,0,0,0,0,8,8,8,8,8,8,8,3,3,3,3,3,3,3,3,3];

const repeatedNumber = num.reduce((acc, curr) =>{

    if(acc[curr]){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
}, {})
console.log(repeatedNumber);
const repetedFunc = (obj) =>{
    let repeted = '0';
    for(const key in obj){
       if(obj[key] > obj[repeted]){
            repeted = key;
       }
    }
    return repeted;
}
console.log(repetedFunc(repeatedNumber));





let entry = Object.entries(repeatedNumber);

// const repeatedCount = entry.reduce((acc, curr) =>{
//     if(acc[1] < curr[1]){
//         acc = curr;
//     }
//     else{
//         acc;
//     }
//     return acc;
// }, entry[0]);


