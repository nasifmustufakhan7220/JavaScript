const fruitsTitle = document.getElementById("fruits-title");
const places = document.querySelectorAll("#favourite-place li");
const singelPlaceRemove = document.querySelectorAll("#favourite-place li")[3];
const place = document.getElementsByClassName('importan-places')[0];
const singlePlace = document.querySelector('.importan-places');
const fruits = document.querySelectorAll(".fruits-container li");
const fruit = document.querySelector('.fruits-container li');
fruit.style.backgroundColor = "black";
fruit.style.color = "white";
for(const fruit of fruits){
    // console.log(fruit.innerText);
}
fruitsTitle.innerText = "Foods I like most";


singlePlace.innerText = "Netrakona";
console.log(places)
for(const place of places){
    place.classList.add("text-center")
}
singelPlaceRemove.classList.remove("text-center");

const sectionsH1 = document.querySelectorAll('section h1');
for(const sectionH1 of sectionsH1){
    sectionH1.style.color = "tomato"
}
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = "5px";
    section.style.borderRadius = "15px";
    section.style.paddingLeft = "15px"
}

const color = document.getElementById('jalali');
color.classList.add('yellow-bg');


const changeColor = (newColor) =>{
    const element = document.getElementById('para');
    element.style.color = newColor;
}

document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click", (event)=>{
        changeColor(event.target.textContent);
    });
});