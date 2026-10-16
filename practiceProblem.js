const students = [
  {
    name: "Nasif",
    marks: {
      math: 90,
      english: 82,
      physics: 95,
    },
  },
  {
    name: "Rahim",
    marks: {
      math: 45,
      english: 52,
      physics: 60,
    },
  },
  {
    name: "Karim",
    marks: {
      math: 78,
      english: 80,
      physics: 75,
    },
  },
];

const studentResultSummary = (students) => {
  if (!Array.isArray(students) || students.length === 0) {
    return "Invalid";
  }
  let newStudentsArr = [];
  for (const student of students) {
    if (
      student === null ||
      typeof student !== "object" ||
      Object.prototype.toString.call(student) !== "[object Object]"
    )
      return "Invalid";

    if (
      !Object.hasOwn(student, "name") ||
      !Object.hasOwn(student, "marks") ||
      typeof student.name !== "string" ||
      student.name.trim().length === 0 ||
      Array.isArray(student.marks)
    )
      return "Invalid";

    let math = student.marks.math;
    let english = student.marks.english;
    let physics = student.marks.physics;

    let total = math + english + physics;

    let lengthOfMarksObject = Object.keys(student.marks);

    let avarage = total / lengthOfMarksObject.length;
    let grade = "";
    let passed = false;
    if (avarage >= 90 && avarage <= 100) {
      grade = "A+";
      passed = true;
    }else if (avarage >= 80 && avarage <= 89) {
      grade = "A";
      passed = true;
    }else if (avarage >= 70 && avarage <= 79) {
      grade = "B";
      passed = true;
    }else if (avarage >= 60 && avarage <= 69) {
      grade = "C";
      passed = true;
    }else{
        grade = "F";
        passed = false;
    }

    let newStudentObj = {
        name: student.name,
        total,
        avarage: Number(avarage.toFixed(0)),
        grade,
        passed
    }

    newStudentsArr = [...newStudentsArr, newStudentObj];
  }

  return newStudentsArr
};

// console.log(studentResultSummary(students));

const text = "JavaScript is awesome. JavaScript is powerful. Learning JavaScript is fun!";

const wordFrequencyCounter = (text) =>{
  let counterWordObj = {};
  if(typeof text !== "string"){
    return "Invalid"
  }

  if(text.trim().length === 0){
    return {};
  }

  const txtArr = text.toLowerCase().split(' ');

  for(let i = 0; i < txtArr.length; i++){
    let isDuplicate = false;
    

    // removeing any special characters in a word, whatever does the special character is at frist position or middle or end. It does not matter because we use regex and its method test();
    if(/[^a-zA-Z0-9 ]/.test(txtArr[i])){
      txtArr[i]=txtArr[i].replace(/[^a-zA-Z0-9 ]/g, '');
    }

    for(let j = 0; j < i; j++){
        if(txtArr[i] === txtArr[j]){
          isDuplicate = true;
          break;
        }
    }

    if(!isDuplicate){
      counterWordObj[txtArr[i]] = 1;
    }else{
      counterWordObj[txtArr[i]] = counterWordObj[txtArr[i]] + 1;
    }
  }

  return counterWordObj;
}

// console.log(wordFrequencyCounter(text));

const cartSummary = (cart) =>{

  if(!Array.isArray(cart) || cart.length === 0){
    return "Invalid";
  }

  let cartItems = {};
  let total = 0;
  let discount = 0;
  let finalPrice = 0;
  let totalItems = 0;

  for(const element of cart){
    if(
      typeof element !== "object" || 
      element === null || 
      Array.isArray(element)
    ){
      return "Invalid";
    }

    if(
    !Object.hasOwn(element, "name") || 
    !Object.hasOwn(element, 'price') || 
    !Object.hasOwn(element, "quantity"

    )){
      return "Invalid";
    }

    if(typeof element.name !== 'string' || 
      element.name.trim().length === 0 ||
      typeof element.price !== "number" ||
      !Number.isFinite(element.price) ||
      element.price < 0 ||
      typeof element.quantity !== "number" ||
      !Number.isFinite(element.quantity) ||
      element.quantity <= 0
    ){
      return "Invalid";
    }

    
    let price = element.price;
    let quantity = element.quantity;
    totalItems = totalItems + quantity;
    let sum = price * quantity;

    total+=sum;
  }
  if(total > 500){
    discount = total * 0.10;
    finalPrice = total * 0.90;
  }

  if(total > 300 && total <= 500){
    discount = total * 0.05;
    finalPrice = total * 0.95;
  }

  if(total <= 300){
    discount;
    finalPrice = total;
  }

  let expensive= cart[0].price;
  let expensiveProductName = cart[0].name;

  for(const expen of cart){
    if(expen.price > expensive){
      expensive = expen.price;
      expensiveProductName = expen.name;
    }
  }

  cartItems.totalItems = totalItems;
  cartItems.totalPrice = total;
  cartItems.discount = discount;
  cartItems.finalPrice = finalPrice;
  cartItems.mostExpensiveProduct = expensiveProductName;


  return cartItems;
  
}

// console.log(cartSummary([
//     {
//         name: "Laptop",
//         price: 100,
//         quantity: 4
//     },
//     {
//         name: "Mouse",
//         price: 200,
//         quantity: 3
//     },
//     {
//         name: "Keyboard",
//         price: 40,
//         quantity: 1
//     }
// ]));




const users = [
    "John Smith",
    "Alice Cooper",
    "John Smith",
    "Alice Cooper",
    "Bob Marley",
    "John Smith",
    "Alice Cooper",
    "John Wick"
];

const generateUsernames = (users) =>{
  const userNames = users.map(user=>{
    return user.replaceAll(" ", "").toLowerCase();
  });

  let finalUserArr = [];
  let countUser = {};
  for(const userName of userNames){
    if(finalUserArr.includes(userName)){
      finalUserArr.push(`${userName}${countUser[userName]}`);
      countUser[userName]++;
    }else{ 
      countUser[userName] = 1;
      finalUserArr.push(userName);
    }
  }
  return finalUserArr;
}

// console.log(generateUsernames(users));




