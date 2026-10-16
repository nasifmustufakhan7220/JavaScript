function convertToCamelCase(sentence) {
    const words = sentence.trim().split(" ");
    let addSentence = words[0].toLowerCase();
    let newStr = words.slice(1);

    for(let word of newStr){
        word = word.toLowerCase();

        addSentence += word.charAt(0).toUpperCase();
        
        addSentence += word.slice(1)
    }
    return addSentence;
}

// console.log(convertToCamelCase("apple         bananna abaca"));


function countEvenOdd(numbers) {
    let evenOdd={even: 0, odd: 0};
  for(const num of numbers){
    if(num % 2 === 0){
        evenOdd.even++;
    }else{
        evenOdd.odd++;
    }
  }

  return evenOdd;
}

// console.log(countEvenOdd([1,2,3,4,5]));


function findFirstUniqueChar(s) {
  const obj = {};

  for(let char of s){
    obj[char] = (obj[char] || 0) + 1;
  }

  const arr = Object.entries(obj);

  const a = arr.find(char=>char[1] === 1);
   let unique = a ? a[0] : -1;
    return unique;
}

// console.log(findFirstUniqueChar("aabbcdeffcde"));


function findLongestWord(sentence) { 
 
    const words = sentence.match(/[a-zA-Z0-9]+/g); 
 
    if (!words) return ""; 
 
    let findLongestWord = words[0]; 
 
    for (const word of words) { 
        if (word.length > findLongestWord.length) { 
            findLongestWord = word; 
        } 
    } 
 
    return findLongestWord; 
}

// console.log(findLongestWord("#$%@!"));


function findSecondLargestUnique(numbers) {
    let unique = [...new Set(numbers)];
    if(unique.length < 2) return null;
    let largestNum = unique[0];
    let secondLargestNumber = unique[0];
    for(let i = 0; i < unique.length; i++){
        if(unique[i] > largestNum){
            secondLargestNumber = largestNum;
            largestNum = unique[i];
            
        }else if(largestNum > secondLargestNumber && secondLargestNumber < unique[i]){
            secondLargestNumber = unique[i];
        }
    }

    return secondLargestNumber;
}

// console.log(findSecondLargestUnique([]));