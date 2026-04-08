const btnUpdateTitle = document.getElementById("btn-update-title");

btnUpdateTitle.addEventListener("click", function () {
    const title = document.getElementById("title");
    title.innerText = "Handeler Updated";
});

const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function () {
    const userInfo = document.getElementById("user-info");
    userInfo.innerText = "User logged In Successfully";
});

const btnUpdate = document.getElementById('btn-update');

btnUpdate.addEventListener("click", function () {
    const nameHolder = document.getElementById('name-holder');
    // console.log(nameHolder.value);

    const name = nameHolder.value;

    const updateName = document.getElementById('update-name');
    updateName.innerText = name;
})
