// function reverseEachWord(str) {
//   const words = str.split(/(\s+)/);
  
//   let reverse = "";
//   for(const word of words){
//     if(/\s+/.test(word)){
//         reverse += word;
//     }else{
//         let reversedWord = "";

//         for(const l of word){
//             reversedWord = l + reversedWord;
//         }

//         reverse += reversedWord;
//     }
//   }
//   return reverse
// }



// function reverseEachWord(str) {
//   const words = str.split(/(\s+)/);
//   let reverse = "";

//   for (const word of words) {
//     if (/\s+/.test(word)) {
//       reverse += word;
//     } else {
//       let reversedWord = "";

//       for (const l of word) {
//         reversedWord = l + reversedWord;
//       }

//       reverse += reversedWord;
//     }
//   }

//   return reverse;
// }


function reverseEachWord (str){
    const words = str.split(' ');

    const newStr = words.map(word => word.split('').reverse().join(""));

    const reversed = newStr.join(' ');

    return reversed;
}
// console.log(reverseEachWord("Hello   World  "));


function convertTemperature(value, unit) {
    let result;
  if(unit === "C"){
    result = Math.round(((value * 9/5) + 32)*100) / 100;
  }else{
     result = Math.round(((value - 32) * 5/9) * 100) / 100;
  }

  return result
}


// console.log(convertTemperature(0, 'C'));



function isPalindrome(str) {
    const onlyLatters = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();

    const newLatters = onlyLatters.split('').reverse().join('')
    
    if(onlyLatters === newLatters){
        return true;
    }

    return false;
}

// console.log(isPalindrome(""));

function classifyPassword(password) {

    if(password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)){
        return "Strong";
    }


    let trueCount = 0;
    
    if(/[a-z]/.test(password)){
        trueCount = trueCount + 1;
    }
    if(/[A-Z]/.test(password)){
        trueCount = trueCount + 1;
    }
    if(/[0-9]/.test(password)){
        trueCount = trueCount + 1;
    }
    if(/[^a-zA-Z0-9]/.test(password)){
        trueCount = trueCount + 1;
    }

    if(password.length >= 6 && trueCount >=2){
        return "Medium";
    }

    return "Weak";
    
}

// console.log(classifyPassword("!"));


function sum(num){
  const str = num.toString();
  let sum = 0;
  for(const n of str){
    let a = Number.parseInt(n);
    sum += a;
  }
  return sum
}

function repeatedDigitSum(n){
    
    
    while(n > 9){
        n = sum(n)
    }
    return n
}

console.log(repeatedDigitSum(10));






