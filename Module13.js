// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Return: a string

const checkTemperature = (temp)=> {
    if(temp >= 30){
        return "Hot";
    }else if(temp <= 15){
        return "Cold";
    }else{
        return "Normal";
    }
}


// console.log(checkTemperature(35));
// console.log(checkTemperature(10)); 
// console.log(checkTemperature(20));


// Input: a number
// Output: the number with digits reversed
// Returns: a number


function reverseNumber(num) {
    let numStr = num.toString();
    
    let reversed = "";
    for(let i = numStr.length - 1; i >= 0; i--){
        reversed = reversed + numStr[i];
    }

    return Number(reversed);

}
// console.log(reverseNumber(1234));
// console.log(reverseNumber(7));




// Input: a number
// Output: product of its digits
// Returns: a number


const productOfDigits = (num)=>{
    let numStr = num.toString();
    let total = 1;

    for(let i = 0; i < numStr.length; i++){
        total = total * numStr[i];
    }

    return total;
}
// console.log(productOfDigits(123));
// console.log(productOfDigits(4040));


// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array


const getOddNumbers = (num) =>{

    let oddArr = [];
    for(let i = 1; i <= num; i++){
        if(i%2 !== 0){
            oddArr.push(i);
        }
    }

    return oddArr;

}

// console.log(getOddNumbers(10));



const countVowels = (str) =>{
    let vowels = "aeiou";
    let count = 0;

        for(let i = 0; i < str.length; i++){
            if(vowels.includes(str[i])){
                count++;
            }
        }
    return count;
    
}

// console.log(countVowels("javascript"));


// Input: a string
// Output: the string without its first and last character
// Returns: a string


function removeFirstAndLast (str){
    let sliced = str.slice(1, 4);
    console.log(sliced);
}

// console.log(removeFirstAndLast("hello"));


// Input: a string
// Output: true or false
// Returns: a boolean


function isPalindrome(str){
    let reversed = "";
    for(const char of str){
        reversed = char + reversed;
    }
    console.log(reversed);

    if(str === reversed){
        return true;
    }else{
        return false;
    }

}

// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));



// Input: a sentence (string)
// Output: the shortest word
// Returns: a string


function findShortestWord(str) {
    let words = str.split(" ");
    let shortestWord = words[0];
    for(const word of words){
        if(shortestWord.length > word.length){
            shortestWord = word;
        }
    }
    return shortestWord;
}

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: a


function findSecondSmallest(arr){

    let smallest= Infinity;
    let secondSmallest = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i] < secondSmallest){
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

// console.log(findSecondSmallest([10, 5, 8, 20, 15])); //Expected: 8



// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number


function countMultiplesOfThree(arr){
    let count = 0;

    for(const num of arr){
        if(num%3===0){
            console.log(num);
            count++;
        }
    }

    return count;
}

// console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10]));



// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(arr){
    let sum = 0;

    for(const num of arr){
        sum+=num;
    }

    let avg = sum / arr.length;
    return avg;
}
// console.log(averageOfArray([2, 4, 6]));


// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array

function keepEvenNumbers(arr){
    let newArr = [];

    for(const num of arr){
        if(Math.abs(num) % 2 !== 1){ // Math.abs make negative number into positive.
            newArr.push(num);
        }
    }

    return newArr;

}

// console.log(keepEvenNumbers([3, -5, 8, -1, 0]));



// Input: an object
// Output: array of the object's keys
// Returns: an array


function listKeys(obj){
    let keys = [];

    for(const key in obj){
        keys.push(key);
    }
    return keys;
}

// console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));


// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value



//Object.hasOwn()
//user.hasOwnProperty()
function getValueOrDefault(obj, key, defaultValue){
    let propertyExit = Object.hasOwn(obj,key);

    if(propertyExit){
        return obj[key];
    }else{
        return defaultValue;
    }
}
let person = { name: "Sam", age: 25 };
// console.log(getValueOrDefault(person, "age", 0));
// console.log(getValueOrDefault(person, "grade", "N/A"));


// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array

function getWordsLongerThan(words, minLength){
    let newArr = []; // a new array

    for(const word of words){
        if(minLength < word.length){
            newArr.push(word);
        }
    }
    return `Words longer than 3 → ["${newArr.join('", "')}"]`;
}

function countArray(arr){
    return arr.length;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
// console.log(longWords);
// console.log(countArray(longWords));



// Input: a number
// Output: true or false
// Returns: a boolean


function isPerfectSquare(num){
    return Math.sqrt(num)%1 === 0
}

// console.log(isPerfectSquare(-16)); // false, because the negative number is not a real number only positive number is a real number.
// console.log(isPerfectSquare(20));



// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string

function reverseWords(str){
    let reversed = ""; // When you declare a variable with an empty string (""), the variable holds an empty string, not undefined. If you console.log() or return that variable, you'll see a blank output because the string contains no characters. It is still a string, just an empty one.
    
    // console.log("revrsed===>", reversed);
    
    let newArr = str.split(" ");
    
    for(const word of newArr){
        if(reversed === ""){
            reversed = word;
        }
        else{
            reversed = word + " " + reversed;
        }
        
    }
    
    // console.log("revrsed===>", reversed);
    return reversed;
}

// console.log(reverseWords("hello world")); 



// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array

function removeDuplicates(numbers) {
    let unique = [];
    
    for(let i = 0; i < numbers.length; i++){
        let isDuplicate = false;
        for(let j = 0; j < unique.length; j++){
            if(unique[j] === numbers[i]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            unique.push(numbers[i]);
        }
    }   

    return unique;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object

function invertObject(obj){
    let newObj = {};

    for(let keys in obj){
        newObj[obj[keys]] = keys;
    }

    return newObj;
}

// console.log(invertObject({ a: 1, b: 2, c: 3 }))
//expected: {"1": "a", "2": "b", "3": "b"}



function findLargest(a, b, c){

    let maxNumber = 0;

    if(a > b && a > c){
        return maxNumber = a;
    }else if(b > a && b > c){
        return maxNumber = b;
    }else{
        return maxNumber = c;
    }

}

// console.log(findLargest(10, 20, -30));
// console.log(findLargest(12, 45, 7));


function maxAndMinNumberFinder(numArr){
    if(!Array.isArray(numArr)){
        return "Invalid";
    }
    let largest = numArr[0];
    let smallest = numArr[0];
    for(let i = 0; i < numArr.length; i++){
        if(typeof numArr[i] !== "number"){
            return "Invalid";
        }else if(numArr[i] > largest){
            largest = numArr[i];
        }else if(numArr[i] < smallest){
            smallest = numArr[i];
        }
    }

    return `Largest: ${largest}
Smallest: ${smallest}`

}
// console.log(maxAndMinNumberFinder([45, 12, 89, 3, 67]));


function filterEvenPositionWords(sentence){
    let filteredWords = [];

    const secntenceArr = sentence.split(' ');
    
    for(let i = 0; i < secntenceArr.length; i++){
        if(i % 2 !== 1){
            filteredWords.push(secntenceArr[i]);
        }
    }

    const sentenceStr = filteredWords.join(" ");
    return `'${sentenceStr}'`
}

// console.log(filterEvenPositionWords('The quick brown fox jumps'));
//Expected: 'The brown jumps';

// Expected Output:
// weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000])
// → { totalSteps: 50200, goalReached: true }


/**
 *Ques: FitTrack, a fitness app, logs a user's daily step counts for the week in an array. Write a function weeklyStepsSummary(stepsArray) that returns an object {
totalSteps, goalReached }, where goalReached is true once totalSteps reaches
50000.
 * 
 * 1. write a function named weeklyStepsSummary(stepsArray)
 * 2. It will be take an array of numbers of user's foot steps count.
 * 3. we need declear a empty object, where we store values as a key-value pairs.
 * 4. First condition outside the loop. if input is not an array return "Invalid";
 * 5. Run a for loop, which will run less that steps array length, not equal to stepsArray's length.
 * 6. if totalSteps is greater than 50000 condition true and goalReached: true.
 */

function weeklyStepsSummary(stepsArray){
    let newObj={};
    if(!Array.isArray(stepsArray)){
        return "Invalid";
    }
    let total = 0;

    for(let i = 0; i < stepsArray.length; i++){
       
        if(typeof stepsArray[i] !== "number"){
            return "Invalid";
        }

        total+= stepsArray[i];
    }

    if(total === 50000){
        newObj.totalSteps = total;
        newObj.goalReached = true;
    }else{
        newObj.totalSteps = total;
        newObj.goalReached = false;
    }

    return newObj;
}

// console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]));

// expected:{ totalSteps: 50200, goalReached: true }

function isPalindrome(str){
    if(typeof str !== "string"){
        return "Invalid";
    }

    let reversed = "";

    for(let i = 0; i < str.length; i++){
        reversed =str[i]+ reversed;
    }

    if(str === reversed){
        return true;
    }else{
        return false;
    }
}

// console.log(isPalindrome('hero')); // Expected: false

function countVowelsChar(str){
    if(typeof str !== "string"){
        return "Invalid";
    }
    let vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

// console.log(countVowelsChar('HEllo World'));

/**
 * 1. we need to create an empty new arra to store the unique value.
 * 2. there will be two loop. the outer loop, which is run based on original array and just only give me the number one by one and inside the outer loop, the inner loop which is run based on unique array and just searched that is the number already stored in the unique array or not.
 * 3. Inside the outer loop we need to declear a variable, so that we can keep record and assume that the number we have got is not duplicate at all.
 * 4. if the original array's element is equal to unique array's element then go inside the if blocks and change that varibale value which took to keep track, wheather the value is duplicate number or not.
 * 5. another if blocks inside the outer loop but outside the inner loop to push unique elements in the unique value.
 */

function removeDuplicatesNumber(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    let unique = [];

    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false;
        for(let j = 0; j < unique.length; j++){
            if(arr[i] === unique[j]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            unique.push(arr[i]);
        }
    }

    return unique;
}
// console.log(removeDuplicatesNumber([1,2,2,3,4,4,5])); // [1,2,3,4,5]


function generateReportCard(student){
  let reportObj = {};
  if(typeof student !== "object" || student === null || Array.isArray(student)){
        return "Invalid";
   }
   let total = 0;
   let average;
   let grade;

   let studentArr = Object.values(student);
   let newStudentArr = studentArr.splice(1);
   for(let i = 0; i < newStudentArr.length; i++){
        if(typeof newStudentArr[i] !== "number"){
            return "Invalid";
        }
        total+= newStudentArr[i];
   }
    average = total / newStudentArr.length;

    if(average > 90){
        grade = "A+";
    }else if(average > 80){
        grade = "A";
    }else if(average > 70){
        grade = "B";
    }else{
        grade = "F";
    }

    reportObj.name = studentArr[0];
    reportObj.total = total;
    reportObj.average = parseInt(average.toFixed(0));
    reportObj.grade = grade;

    return reportObj;

}

// console.log(generateReportCard(student = { 
//     name:'Nasif', 
//     bangla: 50, 
//     english: 65, 
//     math:42 
// }));
//expected { name:'Nasif',total: 157, average: 52, grade: 'F}


function isLeapYear(year){

    if(year % 4 === 0){
        if(year % 100 !== 0 || year % 400 === 0){
            return true;
        }else{
            return false;
        }
    }
    return false;
}

// console.log(isLeapYear(2024));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));



// Scenario: MailBox Pro, an email management system, wants to analyze a sentence containing email addresses. Write a function analyzeEmailDomains(text) that returns an object containing the total number of email addresses and the longest email domain (the part after @).

// ● "Invalid" if the input is not a string.
// Expected Output:
// ● analyzeEmailDomains(" support@gmail.com admin@yahoo.com
// info@programminghero.com")
// → { emailCount: 3, longestDomain: "programminghero.com" }
// ● analyzeEmailDomains("Hello everyone!")
// → { emailCount: 0, longestDomain: "" }


function analyzeEmailDomains(text){

    if(typeof text !== "string"){
        return "Invalid";
    }

    let newTextObj = {};
    let emailCount = 0;
    let longestDomain = "";

    let textArr = text.split(" ");
    
    for(let i = 0; i < textArr.length; i++){
        if(textArr[i].includes("@")){
            emailCount++;
           let domain = textArr[i].split('@');

           if(domain[1].length > longestDomain.length){
                longestDomain = domain[1];
           }
        }
    }
    
    newTextObj.emailCount = emailCount;
    newTextObj.longestDomain = longestDomain;

    return newTextObj;
    
    
}
// console.log(analyzeEmailDomains('contact supportgmail.com'));

// ==================================================
// ==================================================
function sumDigits(num){
    if(typeof num !== "number"){
        return "Invalid";
    }
    let sum = 0;
    
    while(num){
        let extract = num % 10;
        sum+= extract;
        let remain = Math.floor(num / 10);
        num = remain;
    }
   return sum;
}
// =================================================
// =================================================
// console.log(sumDigits(1234));


function runningTotal(amounts){
    if(!Array.isArray(amounts)){
        return "Invalid";
    }
    
    let sum = 0;
    let newRunningTotal = [];

        for(let i = 0; i < amounts.length; i++){
            if(typeof amounts[i] !== "number"){
                return "Invalid";
            }
        sum+= amounts[i];
        newRunningTotal.push(sum);
    }

    return newRunningTotal;
}

// console.log(runningTotal([100, 50, 25]));

function reverseEachWord(sentence){
    let reversed = "";
    
    let sentenceArr = sentence.split(' ');

    for(let i = 0; i < sentenceArr.length; i++){
        
        for(let j = sentenceArr[i].length - 1; j >= 0 ; j--){
            reversed += sentenceArr[i][j];
        }

        // ===============================
            // Add space between words
        // ===============================
        if(i < sentenceArr.length - 1 ){
            reversed += " ";
        }
        //===============================
            // Add space between words
        //===============================
    }
    return reversed;
}

// console.log(reverseEachWord('Hero is strong'));



function secondLargest(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }

    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Invalid";
        }
        else if(largest < arr[i]){
            secondLargest = largest; 
            largest = arr[i]; 
        }else if(largest > arr[i] && secondLargest < arr[i]){
            secondLargest = arr[i]
        }
    }

   return secondLargest;
}

// console.log(secondLargest([45, 12, 89, 3, 67, 100]));



function countEvenOdd(arr){
    if(!Array.isArray(arr)){
        return "Invalid";
    }

    let countObj = {
        even: 0,
        odd: 0
    };

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Invalid";
        }else if(arr[i] % 2 !== 1){
            countObj.even += 1;
        }else{
            countObj.odd += 1;
        }
    }

    return countObj;
}
// console.log(countEvenOdd([1,2,3,4,5]));



const generateSalarySlip = (employee)=>{
    let newObj = {};

    for(const employ in employee){
        if(typeof employee[employ] !== "string"){
            if(typeof employee[employ] !== "number"){
                return "Invalid";
            }
        }
    }

    let netSalary = (employee.basicSalary + employee.bonus) - employee.tax;

    newObj.name = employee.name;
    newObj.netSalary = netSalary;
    return newObj;
}

// console.log(generateSalarySlip({ name:'Karim', basicSalary:30000, bonus:5000, tax:2000 }));


const charFrequency = (str) => {
    let newObj = {};

    for(let i = 0; i < str.length; i++){
        if(newObj[str[i]]){
            newObj[str[i]]++;
        }else{
            newObj[str[i]] = 1;
        }
    }

    return newObj;
}

const verifyCartTotal = (itemPrices, displayedTotal) =>{
    if(!Array.isArray(itemPrices) || typeof displayedTotal !== "number"){
        return "Invalid";
    }

    let total = 0;
    for(const price in itemPrices){
        if(typeof itemPrices[price] !== "number"){
            return "Invalid";
        }
        total+= itemPrices[price];
    }

    if(displayedTotal === total){
        return true;   
    }else{
        return false;
    }
}

console.log(verifyCartTotal([250, 400, 150], 750));