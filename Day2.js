// let arr = [3, 7, 10, 15];
let arr = [1, 2, 3, 4, 5];
let products = [
  {name: "pen", price: 5},
  {name: "book", price: 20},
  {name: "bag", price: 50}
];

let users = [
  {name: "A", active: true},
  {name: "B", active: false},
  {name: "C", active: true}
];

const gtreaterThen8 = arr.filter(x => x > 8);
const findOdd = arr.filter(x => x % 2 === 1);

const keepPrices = products.filter(x => x.price > 10);

const activedUsers = users.filter(x => x.active === true);
// console.log(gtreaterThen8);
// console.log(findOdd);
// console.log(keepPrices);
console.log(activedUsers);