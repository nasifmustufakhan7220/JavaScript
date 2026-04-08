const btnPost = document.getElementById("btn-post");

btnPost.addEventListener("click", function (e) {
    const textArea = document.getElementById("text-area");
    const value = textArea.value;

    // find the first parent
    const sectionsDiv = document.getElementById("div-container");
    
    // create element
    const createP = document.createElement("p");

    // Append child
    sectionsDiv.appendChild(createP);
    // add class
    createP.classList.add("comment");
    
    createP.innerText = value;
    textArea.value = "";
})