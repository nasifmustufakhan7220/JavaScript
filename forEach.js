/**
 * forEach() is an array method used to execute a function once for every element in an array.
 * 
 * 1. ❌ It does NOT return anything
 * 
 * 
 * . ⚠️ It CAN mutate(change) original array (if you do it manually)
 * 
 * 🧠 When to use forEach()

Use it when:

You are not creating a new array
You just want to run code for each item
Logging values
Updating UI
Sending API calls per item
No need for a new array


🧠 Think:

“I just want to do something with each item — no result needed”


❓ Do I just want to loop?

➡️ forEach()
 */

const numbers = [1,2,3];


numbers.forEach(x =>console.log(x*2));

