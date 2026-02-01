const massMark =  95;
const heightMark = 1.88;

const massJohn = 85;
const heightJhon = 1.76;

let BMICAL = (mass,height) => {
    let BMI = mass / (height * height);
    return BMI;
}

const BMIMark = BMICAL(massMark, heightMark);
const BMIJhon = BMICAL(massJohn, heightJhon);
console.log(BMIMark.toFixed(2), BMIJhon.toFixed(2));


let markHightBMI = BMIMark > BMIJhon;

if (markHightBMI) {
    console.log(`Mark's BMI ${BMIMark.toFixed(2)} is higher than John's ${BMIJhon.toFixed(2)}`);
} else {
    console.log(`John's BMI ${BMIJhon.toFixed(2)} is higher than Mark's ${BMIMark.toFixed(2)}`);
}