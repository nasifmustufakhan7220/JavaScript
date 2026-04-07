// find the first parent
const mainContainer = document.getElementById('main-container');

// create element under the main container, because main is the parent container

const sectionContainer = document.createElement("section");


// append the section to main

mainContainer.appendChild(sectionContainer);


// create elements

const h1Element = document.createElement('h1');
h1Element.innerText = "Book lists";

const ulElement = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Physics";
const li2 = document.createElement('li');
li2.innerText = "Math";
const li3 = document.createElement('li');
li3.innerText = "Chemistry";
const li4 = document.createElement('li');
li4.innerText = "Biology";

// appened the elements to section

sectionContainer.appendChild(h1Element);
sectionContainer.appendChild(ulElement);
ulElement.appendChild(li1);
ulElement.appendChild(li2);
ulElement.appendChild(li3);
ulElement.appendChild(li4);


// adding styling
sectionContainer.classList.add('bg');
ulElement.classList.add('txt');
li1.classList.add("listAll");
li2.classList.add("listAll");
li3.classList.add("listAll");
li4.classList.add("listAll");

const lists = document.getElementsByClassName('listAll');
for (const list of lists) {
    if (list.innerText === "Biology") {
        list.classList.add('uppCase');
    }
}