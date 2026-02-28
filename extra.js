// let price = 1000;
// const isLeader = true;

// price = isLeader === true ? price > 500 ? price = price / 2 : price = 0 : price = price + 1000;

// console.log(price);


// const fruits = ['apple', 'banana', 'orange', 'water-malon', 'cherry'];

// for (let i = 0; i < fruits.length; i++){
//     // console.log(fruits[i]);
//     // console.log(fruits.indexOf(fruits[i]));
//     if (fruits.indexOf(fruits[i]) === 3) {
//         console.log(fruits[i]);
//     };
//     if (fruits.indexOf(fruits[i]) == 2) {
//         fruits[i] = 'jambura';
//     };
    
// };
// console.log(fruits);


// const tourist = ['Bangladesh', 'New Zealand', 'Palistine'];
// tourist.push('Gaza');


// const newTourist = ['Maddina', 'Makka'];
// for (let i = 0; i < newTourist.length; i++){
//     tourist.push(newTourist[i]);
//     // console.log(tourist);
//     // console.log(tourist.lastIndexOf(newTourist[i]));
//     if (tourist.lastIndexOf(newTourist[i]) == 5) {
//         tourist.pop();
        
//     }
// };
// console.log(tourist);



// const books = ['Eman', 'Akhidah', 'Rijikh'];

// if (books.includes('javascript')) {
//     console.log("Present in the array")
// }
// else {
//     console.log('Not present in the array');
// }


// const data1 = ['alu', 'tomato', 'peyaj'];
// const data2 = ['rowsun', 'morich', 'pudinah'];

// let mixed = data1.concat(data2);
// console.log(data1,'\n',data2,'\n', mixed);


// let num = 1;

// while (num <= 60) {
//     console.log(num,"I will invest at least 6 hrs every single day for next 60 days!");
//     num++;
// }


// let num = 61;
// while (num <= 100) {
//     if (num % 2 != 0) {
//         console.log(num);
//     }
//     num++;
// }

// let num = 78;
// while (num <= 98) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
//     num++;
// }


// let num = 1;

// while (num <= 10) {
//     console.log(5 * num);
//     num++
// }


// let num = 21;

// while (num >= 15) {
//     console.log(num);
//     num--;
// }


// let i = 10;
// while (i < 15) {
//     i++;
//     if (i % 5 !== 0) {
//         continue;
//     };
//     console.log(i);
    
// }


// let i = 1;
// let sum = 0;
// while (i) {
//     sum += i;
//     if (sum >= 100) {
//         break;
//     }
//     i++;
// }
// console.log(sum);

// let i = 2;
// function isSquare(i) {
//     let root = Math.sqrt(i);
//     return Number.isInteger(root);
// }
// while (i < 20) {
//     if(isSquare(i)){
//         console.log(i);
//         break;
//     };
//     i++;
// }



const login = (num, limit, compare) => {
    let i = num;
    let x;
    while (i < limit) {
    let login = Number(prompt("Enter your password: "));
    if (login === compare) {
        x = ("You are successfully login");
        break;
    };
    i++;
    }
    if (typeof x !== typeof undefined) {
        return x
    } else {
        return `You are kicked out`
    }
}

console.log(login(0, 3, 1234));