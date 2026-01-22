const country = "Bangaldesh";
const continent = "Asia";
let population = 130;
const isIsland = false;
const language = "Bengali";
population = population / 2;
let result = population++;



// console.log(country > 6);
// console.log(continent);
// console.log(isIsland);
// console.log(language);
// console.log(population > 33);

// const description = `${country} is in ${continent} and its ${population}million people speak ${language}`;

// console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);  
} else {
    console.log(`${country}'s population is ${33-population} million below average`);  
}
