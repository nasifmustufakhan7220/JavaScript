const nameInput = document.getElementById("name-input");
const secrectInfo = document.getElementById("secrect-info");
const btnDelete = document.getElementById("btn-delete");

nameInput.addEventListener("keyup", function (e) {
    const value = e.target.value;    
    if (value === "delete") {
        btnDelete.removeAttribute("disabled");
        btnDelete.addEventListener("click", function () {
            secrectInfo.style.display = "none";
            nameInput.value = "";
            btnDelete.setAttribute("disabled", true);
        })   
    }
    else {
        btnDelete.setAttribute("disabled", true);
    }
})