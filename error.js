/**
 *  Three kinds of Errors
 *  1. Syntax Error
 *  2. Runtime Error
 *  3. Logic Error
 */


/**
 * 
 *  * 1. SyntaxError(A SyntaxError happens when your       JavaScript code doesn't follow JavaScript's grammar rules.) Unexpected Token.
 * 
 * ! 2. ReferenceError(A ReferenceError happens when you try to use something that doesn't exist.)
 * 
 * 
 * ? 3. TypeError(A TypeError happens when you try to perform an operation on a value that doesn't support that operation.) It is a Runtime Error.(It's basically mean that if we use one things which is not built for this works, this time which error shows mean as a typeError)(Reading Undefined, it means that when we use a property name which doest not exit. It looks like Uncaught TypeError: Cannot read properties of undefined)(Reasssing a Constant error)
 * 
 * 
 *  4. RangeError(A RangeError happens when a value is outside the allowed range.)
 * 
 *  * The Silent Bug
 * 
 */ 

// 
// 
// 




/**
 *
 * ! 1. SyntaxError
 * Definition:
 * A SyntaxError happens when your JavaScript code does not follow JavaScript's grammar rules.
 *
 * Common examples:
 * - Missing or extra brackets.
 * - Missing quotes.
 * - Unexpected token.
 *
 *
 * ! 2. ReferenceError
 * Definition:
 * A ReferenceError happens when you try to use a variable, function, or identifier that does not exist or has not been declared.
 *
 * Common examples:
 * - Using a variable before it has been declared (in many cases).
 * - Misspelling a variable or function name.
 *
 *
 * ! 3. TypeError
 * Definition:
 * A TypeError happens when you try to perform an operation on a value that does not support that operation.
 *
 * Easy way to think:
 * The value exists, but you're trying to use it in the wrong way.
 *
 * Common examples:
 * - Cannot read properties of undefined.
 * - Calling something that is not a function.
 * - Reassigning a constant variable.
 *
 * Note:
 * TypeError is a Runtime Error because it happens while the program is running.
 *
 *
 * ! 4. RangeError
 * Definition:
 * A RangeError happens when a value is outside the allowed range.
 *
 *
 * ! Silent Bug
 * Definition:
 * A Silent Bug is a bug where the program runs without throwing an error,
 * but the output or behavior is incorrect.
 *
 */


// ```
// /**
//  * JavaScript Errors & Debugging Notes
//  *
//  * 1. SyntaxError
//  * -------------------------------------------------------
//  * Definition:
//  * A SyntaxError happens when your JavaScript code doesn't
//  * follow JavaScript's grammar rules. The program cannot
//  * start running until the syntax is fixed.
//  *
//  * Common Examples:
//  * - Unexpected token
//  * - Missing ) or }
//  * - Missing or extra commas
//  *
//  *
//  * 2. ReferenceError
//  * -------------------------------------------------------
//  * Definition:
//  * A ReferenceError happens when you try to use a variable,
//  * function, or identifier that doesn't exist or hasn't
//  * been declared.
//  *
//  * Common Example:
//  * - Using a variable before it is declared (or one that
//  *   doesn't exist).
//  *
//  *
//  * 3. TypeError
//  * -------------------------------------------------------
//  * Definition:
//  * A TypeError is a Runtime Error. It happens when you try
//  * to perform an operation on a value that doesn't support
//  * that operation.
//  *
//  * Think:
//  * "The value exists, but I'm using it in the wrong way."
//  *
//  * Common Examples:
//  * - Calling a method on undefined or null.
//  * - Trying to use a non-function like a function.
//  * - Reassigning a const variable.
//  *
//  * Note:
//  * Accessing a property that doesn't exist on a valid object
//  * returns undefined. However, trying to access another
//  * property or call a method on that undefined value causes
//  * a TypeError.
//  *
//  *
//  * 4. RangeError
//  * -------------------------------------------------------
//  * Definition:
//  * A RangeError happens when a value is outside the allowed
//  * range for a specific operation.
//  *
//  *
//  * 5. Silent Bug
//  * -------------------------------------------------------
//  * Definition:
//  * A Silent Bug is not a JavaScript error. The code runs
//  * without throwing an error, but the output or behavior is
//  * incorrect because of a logical mistake.
//  */
// ```





// # Module 14: Debugging and Problem Solving with JavaScript (My Notes)

// ## Task 14-1A: SyntaxError


function sayHi(name) {
  console.log("Hi, " + name)
}

// **Explanation:**
// This is a **SyntaxError** because the code does not follow JavaScript's grammar rules. The `console.log()` statement is missing a closing parenthesis `)`. Since JavaScript cannot understand the code's syntax, it stops before running the program. After adding the missing parenthesis, the program runs correctly.


// ## Task 14-1B: TypeError


let word = "hello";
console.log(word.toUppercase());


// **Explanation:**
// This is a **TypeError**. The string method `toUpperCase()` is a built-in JavaScript method, but here it is misspelled as `toUppercase()`. Because JavaScript cannot find a method with that name, it tries to call something that is not a function, which causes a TypeError.



// ## Task 14-1C: Logic Error (Silent Bug)


function square(num) {
    return num + num;
}


// **Explanation:**
// This is a **Logic Error** (also called a **Silent Bug**). The program runs successfully without throwing any error, but the output is incorrect. The function is supposed to return the square of a number, but instead it returns the sum of the number with itself.


// ## Task 14-2: Broken Conditional


function checkScore(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}


// **Explanation:**
// This is a **Logic Error** because the program runs correctly but does not produce the expected result. The requirement says a score of **50 or above** should return `"Pass"`, but the original condition only checked for scores **greater than 50**. Updating the condition to `>=` fixes the logic.




// ## Task 14-3: Broken Loop

 
function countUpTo(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        count = count + 1;
    }

    return count;
}
 

// **Explanation:**
// This is a **Logic Error**. The `for` loop was missing the increment expression (`i++`). Because the loop variable never changed, the condition `i <= n` always remained true, causing an infinite loop. Adding the increment expression allows the loop to finish.


// ## Task 14-4: Broken Array Problem


function getFirstElement(arr) {
    return arr[0];
}


// **Explanation:**
// This is a **Logic Error**. The program runs without any errors, but it returns the wrong value because the wrong array index was used. Arrays start at index `0`, so the first element is always `arr[0]`.



// ## Task 14-5: Broken Function


function subtract(a, b) {
    return a - b;
}


// **Explanation:**
// This is a **Logic Error**. The program runs successfully, but the parameters were used in the wrong order. The function should calculate `a - b`, but it originally calculated `b - a`, which produced an incorrect result.



// ## Task 14-6: Rubber Duck Debugging


function isEmpty(str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}


// **Explanation:**
// This is a **Logic Error**. The original code used the assignment operator (`=`) instead of a comparison operator (`===`). The assignment operator changes a value, while the comparison operator checks whether two values are equal. Since the goal is to compare `str.length` with `0`, `===` is the correct operator.



// ## Task 14-7: Multi-Part Bug


function getOddNumbers(numbers) {
    let odds = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            odds.push(numbers[i]);
        }
    }

    return odds;
}


// **Bug #1 Explanation:**
// The loop condition was incorrect. Using `<= numbers.length` makes the loop run one extra time, which accesses an index outside the array. The loop should continue while `i < numbers.length`.

// **Bug #2 Explanation:**
// The condition used the assignment operator (`=`) instead of the comparison operator (`===`). The goal is to check whether the remainder is equal to `1`, so a comparison operator must be used.



// ## Task 14-8: Count Vowels


function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}


// **Explanation:**
// This is a **Logic Error**. The program runs successfully without crashing, but the loop condition is incorrect. Using `<= str.length` causes the loop to run one extra iteration and access an index outside the string. Changing the condition to `< str.length` fixes the bug.



// ## Task 14-9A: Celsius to Fahrenheit


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


// **Explanation:**
// This is a **Logic Error**. The formula was incorrect because it added `3` instead of `32`. Updating the formula to `(C × 9/5) + 32` produces the correct result.



// ## Task 14-9B: Sum of an Array


function sumArray(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}


// **Explanation:**
// This is a **Logic Error**. The loop originally started at index `1`, which skipped the first element of the array. Starting from index `0` ensures every element is included in the total.



// ## Task 14-9C: Repeat String


function repeatString(str, times) {
    let result = "";

    for (let i = 0; i < times; i++) {
        result = result + str;
    }

    return result;
}


// **Explanation:**
// This is a **Logic Error**. The original code replaced the value of `result` during every iteration, so only the last value remained. Instead, the new string should be added to the existing value of `result` each time through the loop.



// ## Task 14-9D: Object Property Update


function updateAge(person, newAge) {
    person.age = newAge;
    return person;
}


// **Explanation:**
// This is a **Logic Error**. The `age` property should be updated with the `newAge` parameter. The original code assigned the entire `person` object to the `age` property, which is not the intended behavior.
