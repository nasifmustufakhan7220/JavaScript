


function compressCharacters(str) {
    if (str.length === 0) {
        return "";
    }

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i];

            if (count > 1) {
                result += count;
            }

            count = 1;
        }
    }

    return result;
}

function titleCaseSentence(str) {
    const words = str.replace(/\s+/g, " ").trim().toLowerCase().split(" ");

    if (words[0] === "") {
        return "";
    }

    let add="";
    for(const word of words){
        let w = word[0].toUpperCase();
        add+=w+word.slice(1)+ " ";
    }

    return add.trimEnd();
}

// console.log(titleCaseSentence("      "));

function countWordFrequencies(sentence) {
  const letters = sentence.toLowerCase();
  const words = letters.match(/[a-z0-9]+/g) || [];

  let obj={}
  
  for(let i = 0; i <words.length; i++){
        if(obj[words[i]]){
            obj[words[i]]++;
        }else{
            obj[words[i]] = 1;
        }
  }
  return obj

}

// console.log(countWordFrequencies("!!   !"));


function truncateString(str, maxLength) {
    if(str.length <= maxLength){
        return str;   
    }
    
    if(maxLength <=3 && str.length > maxLength){
        return "...";
    }
    if(str.length > maxLength){
        return str.slice(0,maxLength - 3)+"...";
    }
}


function isAnagram(s1, s2) {

  const clean1 = s1.toLowerCase().replace(/[^a-z]/g,"");
  const clean2 = s2.toLowerCase().replace(/[^a-z]/g,"");

  if(clean1.length !== clean2.length) return false;

  const sorted1 = clean1.split('').sort().join("");
  const sorted2 = clean2.split("").sort().join("");

  if(sorted1 === sorted2) return true;

  return false;
}

console.log(isAnagram("listen", "silent"));
