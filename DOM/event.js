const makeYellow = () => {
    document.body.style.backgroundColor = "yellow";
}

const makeRed = () => {
    document.body.style.backgroundColor = "red";
}

const blue = document.getElementById('btn-make-blue');

blue.onclick = () => {
    document.body.style.backgroundColor = "blue";
}

// const makeBlue = () => {
//     const blue = document.getElementById('btn-make-blue');
//     blue.onclick = () => {
//         document.body.style.backgroundColor = "blue";
//     }
// }
// makeBlue()

const purple = document.getElementById("btn-make-purple");

const makePurple = () => {
    document.body.style.backgroundColor = "purple";
}
purple.onclick = makePurple;


document.getElementById('btn-make-skyBlue').addEventListener('click', () => {
    document.body.style.backgroundColor = "skyblue";
});

const box = document.getElementById("box");

box.addEventListener("click", function () {
    box.style.backgroundColor = "black";
});

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "white"
});

const input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
})

input.addEventListener('keyup', function (event) {
    console.log("key released:", event.key);
})

input.addEventListener('keypress', function (event) {
    console.log("keypress:", event.key);
})