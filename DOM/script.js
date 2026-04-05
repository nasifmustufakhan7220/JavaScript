// get element by id

const wel = document.getElementById('wel');
const jalali = document.getElementById('jalali');
const fruitsTitle = document.getElementById('fruits-title');


//get elements by class name
const importantPlaces = document.getElementsByClassName('importan-places');

//Add classElement
wel.classList.add('text-center');
jalali.classList.add('yellow-bg');
fruitsTitle.classList.add('color');
fruitsTitle.innerText = "Food I like most";


// class Name for of loop

for (const place of importantPlaces) {
    if (place.innerText === "Katabon") {
        place.innerText = "Netrakona";
    }
}