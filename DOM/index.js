const fruitsTitle = document.getElementById("fruits-title");
const places = document.getElementsByClassName('importan-places');
for(const place of places){
   place.innerText = "Netrakona";
   break;
}

fruitsTitle.innerText = "Foods I like most";

for(const place of places){
    place.style.color = "tomato"
}

const changeColor = (newColor) =>{
    const element = document.getElementById('para');
    element.style.color = newColor;
}

document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click", (event)=>{
        changeColor(event.target.textContent);
    })
});
