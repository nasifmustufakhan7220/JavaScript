const users = [
  { id: 1, username: "arif", age: 19, active: true },
  { id: 2, username: "sadia", age: 22, active: false },
  { id: 3, username: "tahsin", age: 25, active: true },
  { id: 4, username: "nabila", age: 18, active: true },
  { id: 5, username: "rakib", age: 30, active: false }
];


const userNameContainer = users.map(x => {
  return x.username;
});


const activedUser = users.filter((x) =>{
  if(x.active === true){
    return x;
  }
})

const firstUser = users.find((x) =>{
    if(x.age > 24){
      return x;
    }
})

users.forEach((x) => {
  console.log(`Name is ${x.username}, age is ${x.age}`);
})


const modifiedVerson = users.map((x) =>{
  let duplicateObj = {...x};
  duplicateObj.age = duplicateObj.age + 1;
  return duplicateObj;
})





const orders = [
  { orderId: "A101", amount: 1200, delivered: true },
  { orderId: "A102", amount: 500, delivered: false },
  { orderId: "A103", amount: 750, delivered: true },
  { orderId: "A104", amount: 2000, delivered: false },
  { orderId: "A105", amount: 300, delivered: true }
];


const extractID = orders.map((x) => {
  return x.orderId;
})

const deliveredOders = orders.filter((x) =>{
  if(x.delivered === true){
    return x;
  }
})

const firstOrder = orders.find(x =>{
  if(x.amount > 1000){
    return x;
  }
})


orders.forEach(x =>{
  const display = `{orderId : ${x.orderId}, amount: ${x.amount}},`;
  console.log(display);
})


const amountIncreased = orders.map(x =>{
  let copiedObj = {...x};
  copiedObj.amount = copiedObj.amount + 100;
  return copiedObj;
})





const books = [
  { title: "Clean Code", pages: 464, available: true },
  { title: "Atomic Habits", pages: 320, available: false },
  { title: "You Don’t Know JS", pages: 278, available: true },
  { title: "Deep Work", pages: 304, available: true },
  { title: "The Pragmatic Programmer", pages: 352, available: false }
];


const bookTitle = books.map(x =>{
  return x.title;
})



const availableBooks = books.filter(x => {
  if(x.available === true){
    return x;
  }
})


const firstBook = books.find(x =>{
  if(x.pages > 400){
    return x;
  }
})



books.forEach(x =>{
  const display = `{ title : ${x.title}, pages: ${x.pages} },`;
  console.log(display);
})


const pagesAdded = books.map(x => {
  let duplicatedBooks = {...x};
  duplicatedBooks.pages = duplicatedBooks.pages + 10;
  return duplicatedBooks;
})
