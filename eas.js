function createGrid() {
    const row = document.querySelector(".row");
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "background-color: white; height: 25px; width: 25px;");
    const container = document.querySelector("#container");
    for (i=0; i<16; i++){
        row.appendChild(square.cloneNode(true));
    }

    for (i=0; i<15; i++){
        container.insertBefore(row.cloneNode(true), row);
    }
}

function destroyGrid()
{
    const container = document.querySelector("#container");
    const allRows = document.querySelectorAll(".row");
    for (i=0; i<allRows.length; i++){
        container.removeChild(allRows[i]);
    }
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
}

createGrid();

let hover = document.getElementById("container");
hover.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "black";
});

const resetButton = document.querySelector("#btn");
resetButton.addEventListener("click", () => {
    destroyGrid();
    createGrid();
});