let gridsize = 16;

const lgBtn = document.querySelector("#lgSqu")
lgBtn.addEventListener ("click", () =>{
    gridsize = 16;
    destroyGrid();
    createGrid();
})

const mdBtn = document.querySelector("#mdSqu")
mdBtn.addEventListener ("click", () =>{
    gridsize = 32;
    destroyGrid();
    createGrid();
})

const smBtn = document.querySelector("#smSqu")
smBtn.addEventListener ("click", () =>{
    gridsize = 64;
    destroyGrid();
    createGrid();
})

function createGrid() {
    const row = document.querySelector(".row");
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "background-color: white;");
    const container = document.querySelector("#container");
    for (i=0; i<gridsize; i++){
        if (gridsize == 16){
            square.setAttribute("style", "height: 25px; width: 25px");
            row.appendChild(square.cloneNode(true));
        }
        else if (gridsize == 32) {
            square.setAttribute("style", "height: 12.5px; width: 12.5px");
            row.appendChild(square.cloneNode(true));
        }
        else if (gridsize == 64) {
            square.setAttribute("style", "height: 6.25px; width: 6.25px");
            row.appendChild(square.cloneNode(true));
        }
        else {
            alert("Error!")
        }
    }

    for (i=0; i<gridsize-1; i++){
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

// let hover = document.getElementById("container");
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black"]
// hover.addEventListener("mouseover", function(e) {
//     if (e.target.classList=="square")
//     {
//         for(i = 0; i < colors.length; i++) {
//             e.target.style.backgroundColor = colors[i];
//         }
//     }

// });

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    destroyGrid();
    createGrid();
});