// const price1 = 10;
// const price2 = '10';

// console.log(price1 == price2); // true
// console.log(price1 === price2); // false 
// console.log(price1 != price2); // false

// console.log(price1 !== price2); // true

// console.log(price1 > price2); // false
// console.log(price1 < price2); // false
// console.log(price1 >= price2);// true 
// console.log(price1 <= price2); // true

1.// true, because double equal (==) just check the value here.
2.// false, because this time it also check the types and values too.
3.// false, because values are same, and it will not check the type of values now. Like, when Js convert the string into a number, the both values will be numbers and JS will start comparing with lose oparator(==)and it may come true, then for this exclamatory(!) the true flip into false.
4.// true, because this time it will not just checks the values, but also it checks types. that's why this output come true.
5.// false, because javaScript will atumatically convert the string into a number and then it will compare and js will see that, both values are equal.
6.// false, because this time also js convert the string into number then it will check,but js will find that both are same;
7.// true, because when js run the convertion, afterthat when the convertion done, then js will compare between of them like price1 is greater than or equal to price2 and here both values are same.
8.// true, because when js run the convertion, afterthat when the convertion done, then js will compare between of them like price1 is less than or equal to price2 and here both values are same.



//console.log('5'== 5); // true. Becuse double equal oparator just check, is the values are same or not. Output will be true, because of the type convertion. 
//console.log('5'=== 5); // false. Because stric equal oparator not only chcek values, but also check the type of values and this time the type convertion will no be happend.

// const isRaining = true;

// if(isRaining){
//     console.log("Take an unbrella");
// }

// const stock = 0;

// if(stock == false){
//     console.log("Out of stock");
// }

// if(stock === false){
//     console.log("Out of stock");
// }


// const posNeg = 10; 

// if(posNeg > 0){
//     console.log("Positive");
// }else{
//     console.log("Negative")
// }


// const isLeapYear = 2001;

// if(isLeapYear % 4 === 0){
//     console.log("Leap Year");
// }else{
//     console.log("Not a leap year");
// }


// const speed = 80; 

// if(speed > 80){
//     console.log("Overspeeding");
// }else{
//     console.log("Normal speed");
// }

// const age = 19;
// const hasTicket = true;

// if(age > 18 && hasTicket){
//     console.log("Entry allowed");
// }else{
//     console.log("Not allowed");
// }

// const isWeekend = false;
// const isHoliday = true;

// if(isWeekend || isHoliday){
//     console.log("No work today");
// }


// const userName = 'Nasif';
// const password = 12345;


// if(userName === "Nasif" && password === 12345){
//     console.log("Login Succesfully");
// }else{
//     console.log("Not login");
// }

// const marks = 80;

// if(marks > 80){
//     console.log("A+");
// }else if (marks > 70){
//     console.log("A");
// }else if (marks > 60){
//    console.log("B"); 
// }else if (marks > 50){
//     console.log("C");
// }else if (marks > 40){
//     console.log("Pass");
// }else{
//     console.log("F");
// }

// const weight = 100;
// const height = 0.89;

// const bmi = weight / (height*height);

// if(bmi < 18.5){
//     console.log("UnderWeigth");
// }else if (bmi >=18.5 && bmi <= 24.9){
//     console.log("Normal");
// }else if (bmi >= 25.0 && bmi <= 29.9){
//     console.log("OverWeigth");
// }else{
//     console.log("Obese");
// }



// const month = 11;

// if(month === 1){
//     console.log("January");
// }else if(month === 2){
//     console.log("February");
// }else if(month === 3){
//     console.log("March");
// }else if(month === 4){
//     console.log("April");
// }else if(month === 5){
//     console.log("May");
// }else if(month === 6){
//     console.log("June");
// }else if(month === 7){
//     console.log("July");
// }else if(month === 8){
//     console.log("August");
// }else if(month === 9){
//     console.log("Septembar");
// }else if(month === 10){
//     console.log("Octobar");
// }else if(month === 11){
//     console.log("Novambar");
// }else if(month === 12){
//     console.log("Decembar");
// }

// const age = 18;
// const hasID = true;


// if(age >=18 && hasID){
//     console.log("Eligible for vote");
// }else{
//     console.log("Not Eligible for vote");
// }


// const isLoggedIn = true;
// const isAdmin = true;

// if(isLoggedIn && isAdmin){
//     console.log("Admin dashboard");
// }else if(isLoggedIn && !isAdmin){
//     console.log("User dashboard");
// }else{
//     console.log("Please Login");
// }

// const oddEven = 10;

// oddEven % 2 === 0 ? console.log("even") : console.log("odd");

// const age = 18;

// age >= 18 ? console.log("Adult") : console.log("Minor");

// const price = 1000;

// price > 1000 ? console.log("Expensive") : console.log("Affordable");


// const hasPermission = false;

// !hasPermission ? console.log("Access Denied") : console.log('Granted')


// const isOnline = false;

// !isOnline ? console.log("User is offline") : console.log("active");


// const total = 1100;
// const isMember = false;
// const discountAmount10 = 10;
// const discountAmount20 = 20;

// if(total > 1000 && !isMember){
//     let discountParcentage = discountAmount10 / 100;
//     let discount = total * discountParcentage;
//     let discountApply = total - discount;
//     console.log(discountApply);
// }
// else if(total > 1000 && isMember){
//     let discountParcentage = discountAmount20 / 100;
//     let discount = total * discountParcentage;
//     let discountApply = total - discount;
//     console.log(discountApply);
// } else{
//     console.log(total);
// }


// const userName = "nasif";
// const role = 2;
// const password = "123456";
// const matchedPassword = "123456"



// if(userName === "nasif" && password.length >= 6 && typeof (parseInt(password)) === "number" && parseInt(password) === parseInt(matchedPassword)){
//     console.log("Login successfully");
//     role === 1 ? console.log("You are a admin") : console.log("You are a user");
// }else{
//     console.log("Wrong username of password! Please, try again");
// }


// const a = 100;
// const b = 105;

// if(a!==b){
//     console.log (a, b);
// }








// for(let i = 0; i < 5; i++){
//     console.log("Hello");
// }


// for(let i = 0; i < 10; i++){
//     console.log(i+ 1);
// }


// let i = 10;

// while(i > 0){
//     console.log(i);
//     i--;
// }


// let i = 0;

// // when the i is equal to 7 then it checks at frist 7 === 7 is true then it will flip in a false bacuse of this ! not equal sign.

// while(i !== 7){
//     console.log("Loop চলছে", i + 1);
//     i++;
// }


// for(let i = 1; i <= 30; i++){
//     if(i%2 !== 1){
//         console.log(i);
//     }
// }



// let sum = 0;
// for(let i = 1; i <= 20; i++){
//     sum += i;
// };

// console.log(sum);

// let userNumber =  parseInt(prompt("Please enter a number: "));

// for(let i = 1; i <= 10; i++){
//     console.log(userNumber + "X" + i + "=",userNumber*i);
// }


// for(let i = 20; i > 0; i--){
//     console.log(i);
// }

// let sum = 0;
// for(let i = 2; i <= 50; i++){
//     if(i%2 !==1){
//         sum += i;
//     }
// }

// console.log(sum);

// for(let i = 1; i <= 50; i++){
    
//     if(i > 30){
//         break;
//     }
//     console.log(i);
// }


// for(let i = 1; i <= 20; i++){
//     if(i%4 === 0){
//         continue;
//     }
//     console.log(i);
// }


// let i = 1;
// do{
    
//     console.log(i);
//     i++;
// }while(i > 5)


// for(let i = 1; i > 5; i++){
//     console.log(i);
// }

// let i = 1;

// while(i > 5){
//     console.log(i);
//     i++;
// }

// let j = 1;

// do{
//     console.log(i);
//     i++
// }while(i>5);



// let i = 1;

// while(i <= 100){
//      if(i > 40){
//         break;
//     } else if(i%5 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// for(let i = 1; i <= 100; i++){
//     if(i%5 === 0){
//         continue;
//     }else if(i > 40){
//         break;
//     }
//     console.log(i);
// }



// let password = "12345";

// while(true){
//     if(password !== '12345'){
//         console.log("Enter a valid password");
//         break;
//     }else{
//         console.log("Login successfull");
//         break;
//     }
// }






// const arr = [1, 2, 3];

// console.log(arr.length);
// console.log(arr[0], arr[2]);
// arr[1] = 0;
// arr.push(5);
// console.log(arr.pop());
// arr.unshift(2);
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

// console.log(arr.includes(0));

// console.log(arr.indexOf(3));

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }


// const arr1 = [4, 5, 6];

// let result = arr.concat(arr1);


// const newArr = result.slice(2, 5);
// console.log(newArr);
// console.log(result);



// const arr = ['Hello', 'world'];



// console.log(arr.join(' '));

// const arr = [1, 2, 3, 4, 5];
// const arr = ['nasif', 'nadia', 'sadia'];
// console.log(arr.reverse());

// for(let i = arr.length - 1; i >= 0; i--){
//         console.log(arr[i])
//     }

// for(let i = 0; i < arr.length; i++){
//     newArr.unshift(arr[i]);
// }

// console.log(newArr);


// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// const newArr = [];

// for(let i = 0; i< arr.length; i++){
//     if(newArr[0] !== arr[i]){
//         newArr.unshift(arr[i]);
//     }
// }

// console.log(newArr)
// console.log(arr.length - 1);


// const names = ['nasif', 'nadia', 'Sadia'];

// const nums = [10, 30, 2, 4, 8, 25, 20];


// const result = [...nums].sort((a,b) => a - b);
// console.log(result);


// const nums = [10, 30, 2, 4, 8, 25, 20];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 10){
//         console.log(nums[i]);
//     }
// }

// const result = [...nums].sort((a,b) => a - b);

// let sum = 0;
// for(let i = 0; i < result.length; i++){
//     sum += result[i];
// }

// console.log(sum);

// const nums = [0, 1 ,3, 2, 2, 3, 1, 5, 4, 2, 5, 4];

// const newNums = []; 

// for(let i = 0; i < nums.length; i++){
//     let j;
//     for(j = 0; j < newNums.length; j++){
//         if(newNums[j] === nums[i]){
//             break;
//         }
//     }

//     if(j === newNums.length){
//         newNums.push(nums[i]);
//     }

// }

// console.log(newNums);


// const arr = [1, "hello", 3, "world", 5];

// const nums = [];
// const str = [];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== "string"){
//         nums.push(arr[i]);
//     }else{
//         str.push(arr[i]);
//     }
// }

// console.log(nums, str)

// const nums = [1, -10, 80, 100, 0, -1];

// let max = nums[0];
// let min = nums[0];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i];
//     }

//     if(nums[i] < min){
//         min = nums[i];
//     }
// }
// console.log(max, min);




// const arr1 = [1,[2,3],[4,[5,6]]];

// console.log(arr1.flat()); // by default 1;
// console.log(arr1.flat(2));


// const roted = [1,2,3,4,5];







// const str = 'i love you';
// let newStr = "";

// for(let i = 0; i < str.length; i++){
//     newStr =  str[i] + newStr;
// }



// const str = 'i love you';

// let result = str.split(' ')

// for(let i = 0; i < result.length; i++){
//     let strs = result[i].toString();

//     newStr = strs + " " +newStr;
// }

// console.log(newStr);


// const withdrawMoney = (requestedAmount, accountBalance)=>{

//     if(requestedAmount > accountBalance ){
//         return "Insufficient Balance";
//     }else if(requestedAmount < 500){
//         return "Invalid amount";
//     }else if(requestedAmount % 100 !==0){
//         return "Amount must be a multiple of 100";
//     }

//     let thousandNotes = Math.floor(requestedAmount / 1000);

//     let remainingAmountFiveHundred = requestedAmount - (thousandNotes * 1000);

//     let fiveHundredNotes = Math.floor(remainingAmountFiveHundred / 500);

//     let remainingAmountOneHundred = remainingAmountFiveHundred % 500;

//     let oneHundredNotes = remainingAmountOneHundred / 100;

//     let cashOut = {
//         status: "Success",
//         thousandNotes,
//         fiveHundredNotes,
//         oneHundredNotes
//     }
//     return cashOut;
// }

// // console.log(withdrawMoney(3100, 20000));



// const countVowels = (str, vowels) =>{
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//        if(vowels.includes(str[i])){
//             count++;
//        }
//     }
//     return count;
// }
// let str = "My name is Nasif Khan";
// let vowels = "aeiou";
// // console.log(countVowels(str, vowels));


// const findpalindromeString = (originalStr) =>{

//     let reverseStr = "";

//     for(let i = originalStr.length - 1; i >= 0; i--){
//         reverseStr = reverseStr + originalStr[i];
//     }
//     console.log(reverseStr);
//     if(originalStr === reverseStr){
//         return "palidrom string";
//     }else{
//         return "Not palidrom string";
//     }

// }


// let originalStr = "madam";
// // console.log(findpalindromeString(originalStr));


// const countLetter = (str) =>{
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         // if(str[i].includes(' ')){
//         //     continue;
//         // }else{
//         //     count++
//         // }

//         if(str[i] !== ' '){
//             count++
//         }
//     }
//     return count;
// }
// // console.log(countWord(str));


// const countWord = (str) =>{
//     let words = str.split(' ');
//     let count = 0;
//     for(const word of words){
//         count++;
//     }

//     return count;
// }


// // console.log(countWord(str));


// const findMaxMinNumber = (arr) =>{
//     let max = arr[0];
//     let min = arr[0];


//     for(const num of arr){
//         if(num > max){
//             max = num;
//         }

//         if(num < min){
//             min = num;
//         }
//     }

//     return {max, min};

// }

// const arr = [10, 20, 30, 40, 50, -70, 100, -100];
// // console.log(findMaxMinNumber(arr));


// const leptop = {
//     name: "Dell",
//     size: 15,
//     color: "Gray-white",
//     price: 625000
// }

// const keys = Object.keys(leptop);


// for(let i = 0; i < keys.length; i++){
//     // let key = keys[i];
//     console.log(keys[i],leptop[keys[i]]);
// }
// console.log(keys);


const hello = document.getElementsByClassName('hello');
console.log(hello);
