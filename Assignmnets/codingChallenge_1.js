let marksMass = 78;
let markHeight = 1.69;
let johnMass = 102;
let johnHeight = 1.5;
let markHigherBMI = true;


let BMICAL = (mass,height) => {
    let BMI = mass / (height * height)
    return BMI;
}
let mark = BMICAL(marksMass, markHeight);
console.log(mark);

let jhon = BMICAL(johnMass,johnHeight);
console.log(jhon);

if (mark > jhon) {
    console.log(markHigherBMI);
} else {
   console.log(markHigherBMI = false);
}



