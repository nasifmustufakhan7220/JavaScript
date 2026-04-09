const parent = document.getElementById("parent");
const items = document.getElementsByClassName("item");
const btnAddItem = document.getElementById("btn-add-item");

parent.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
})

btnAddItem.addEventListener("click", function () {
    const newElement = document.createElement("li");
    newElement.classList.add("item");
    newElement.innerText = "New Item";
    parent.appendChild(newElement);
})