// Task 1.1 — Spot the Difference

// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];


// What do you notice?
// both lenghts are same
// console.log(str.length);
// console.log(arr.length);

// Do both work the same way?
// Yes.
// console.log(str[0]);
// console.log(arr[0]);

//Try str.push("!") —  what happens? Why does this fail for strings but not arrays?

//console.log(str.push("!")); // fail because strings are immutable.

// console.log(arr.push("!")); // it works, because arrays are mutable and push is a array's method and it only return the lenght after pushing anythings.




// Task 1.2 — Convert Between Them

// Convert the string "JavaScript" into an array of characters.
// const str = "JavaScript";
// console.log(str.split(''));

// Convert the array ["c", "a", "t"] back into a single string "cat".

// const arr =  ["c", "a", "t"];
// console.log(arr.join(''));



// Task 2.1 — Case Conversion

// let name = "JavaScript";
// Print the uppercase version.
// console.log(name.toUpperCase());


// Print the lowercase version.
// console.log(name.toLowerCase());


// Print the string with whitespace trimmed: "   hi there   " → "hi there"

// const str = "   hi there   ";
// console.log(str.trim());



// Task 3.1 — Slicing Strings

// let sentence = "Learning JavaScript is fun!";

// Get just the word "Learning" using .slice().
// console.log(sentence.slice(0, 8));

// Get the last 4 characters ("fun!") using .slice() with a negative index.
// console.log(sentence.slice(-4)); //To include the very last character, omit the second argument entirely.


// Task 3.2 — Combine Strings
// const str1 = "Hello";
// const str2 = "World"
// Use .concat() to join "Hello" and "World" into "Hello World".
// console.log(str1.concat(" ", str2));


// Use + and template literals to do the same thing. Compare all three approaches.

// console.log(str1 + " " + str2);

// console.log(`${str1} ${str2}`);




// Task 4.1 — Three Reversal Methods


// Write a function reverseString(str) three different ways:
// Test all three with "JavaScript" → should return "tpircSavaJ".

// Using a for of loop that builds the reversed string character by character
const reverseString1 = (str) =>{
    let reversed = "";
    for(const char of str){
        reversed = char + reversed;
    }

    return reversed;
}


// Using .split(""), .reverse(), and .join("")
const reverseString2 = (str) =>{
    let reversed = str.split("").reverse().join("");
    return reversed;
}

// console.log(reverseString2("JavaScript"));



// Bonus: Which method do you think is fastest? Why?

// I think solving this task with a for of loop is likely the fastest approach because it only traverses the string once to build the reversed string. In contrast, the split(), reverse(), and join() approach performs multiple operations: split() traverses the string to create an array, reverse() traverses the array to reverse it, and join() traverses it again to create the final string. Although the built-in methods are cleaner and easier to read, I think the for loop is likely to perform better because it does less overall work and doesn't create as many temporary data structures.





// Task 5.1 — Build a Profile Object


// Create an object student with these properties: name, age, grade, and isEnrolled.
// const student = {
//     name : "Nasif",
//     age : 23,
//     grade : "A",
//     isEnrolled: true
// }

// Log the whole object.
// console.log(student);

// Log just the name property using dot notation.
// console.log(student.name);



// Task 5.2 — Watch the Video Concept


// After watching the "What is an Object" video, write 2–3 sentences (as a comment in your code) explaining an object in your own words, using a real-life analogy (not a car or a person — get creative!).

// An object is a way to store related information about one thing in a single variable using key-value pairs. For example, if we want to describe a tea cup, we might mention its color, size, brand, and price. All of these details belong to the same tea cup. Similarly, in programming, we use an object to keep all the related information about one thing together.



// Task 6.1 — Dot vs Bracket Notation

// let car = { 
//     brand: "Toyota", 
//     model: "Corolla", 
//     year: 2022 
// };
// Get brand using dot notation.
// console.log(car.brand);
// Get model using bracket notation.
// console.log(car['model'])
// Add a new property color: "blue" using bracket notation.
// car['color'] = "White";
// console.log(car);
// Update year to 2023 using dot notation.
// car['year'] = 2023;
// console.log(car);



// Task 7.1 — Keys and Values
// let book = { 
//     title: "The Hobbit", 
//     author: "Tolkien", 
//     pages: 310 
// };
// Get an array of all keys 
// const keys = Object.keys(book);
// console.log(keys);
// Get an array of all 
// const bookArr = Object.entries(book);
// console.log(bookArr);
// Delete the pages property using delete.
// delete book['pages'];
// console.log(book);



// Task 7.2 — Nested Objects


// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }


// Log the city using dot notation chaining.
// console.log(user.address.city);
// Add a country property inside the address.
// const country = "Austria";
// user.address['country'] = country;
// console.log(user);
// Delete the zip property from the nested object.
// delete user.address.zip;
// console.log(user);


// Task 8.1 — Loop Through Properties

// let scores = { 
//     math: 90, 
//     science: 85, 
//     art: 95 
// };
// Use a for...in loop to log each key and value like: math: 90.
// for(const key in scores){
//     console.log(key, scores[key]);
// }

// Calculate the average of all values in the loop.
// let sum = 0;
// let i = 0;
// for(const key in scores){
//     sum += scores[key];
//     i++;
// }

// const avg = sum / i;
// console.log(sum,avg, i);



// Task 9.1 — Contact Book

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};


// 1.Convert the email to lowercase and update the object.
const email = contact.email.toLowerCase();
contact.email = email;


// 2.Loop through the contact object and print each key-value pair.
// for(const key in contact){
//     console.log(`${key} : ${contact[key]}`);
// }
// 3.Add a new property favoriteWords: [] (an array) — push 3 words to it.
contact.favoriteWords = [];

contact.favoriteWords.push("Potato");
contact.favoriteWords.push("Kutkut");
contact.favoriteWords.push("nasifKhan");

// console.log(contact);
// 4.Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
let reversed = reverseString1(contact.name);
console.log(reversed);
// 5.Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

if(contact.email.endsWith("@email.com")){
    console.log("Your E-mail is verified");
}else{
    console.log("Invalid");
}
