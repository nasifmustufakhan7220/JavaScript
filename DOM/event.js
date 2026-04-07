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