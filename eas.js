const container = document.querySelector("#container")
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("style", "background-color: aqua; height: 25px; width: 25px; margin: 1px");
container.appendChild(square);

function createDiv() {
    for (i=0; i<15; i++){
        container.appendChild(square.cloneNode(true));
    }
}

createDiv();