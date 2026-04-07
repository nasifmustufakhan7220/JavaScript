// get element by id

const wel = document.getElementById('wel');
const jalali = document.getElementById('jalali');
const fruitsTitle = document.getElementById('fruits-title');


//get elements by class name
const importantPlaces = document.getElementsByClassName('importan-places');


//get elements by querySelector
const fruisContains = document.querySelectorAll(".fruits-container span");
const fruits = document.querySelector("#fruits-title");


//get elements by childNode
const players = document.getElementById('players-container');

players.childNodes[3].childNodes[1].innerText = "Mahmudullah";

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

// class Name for of loop using querySeclorAll

for (const fruit of fruisContains) {
    fruit.style.color = "blue";
    fruit.classList.add("textFont")
}

const playersList = document.querySelector("#player-list");
const cElement = document.createElement("li");
cElement.innerText = "New born baby footballer";

playersList.appendChild(cElement);

