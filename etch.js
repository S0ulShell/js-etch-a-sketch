const container = document.querySelector("#container");

const setSize = document.querySelector("#prompter");
setSize.addEventListener("click", createGrid);

const erase = document.querySelector("#erase");
erase.addEventListener("click", eraseGrid)

let gridSize = 16;

let brush = "grey";


function initGrid() {
    let initial = 16;
    for (let i = 0; i < gridSize; i++) {
        createColumn(16);
    }
    setBrush();
}

function createColumn(int) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let i = 0; i < int; ++i) {
        const div = document.createElement("div");
        div.setAttribute("id", "pixel");
        column.appendChild(div);
    };
    container.appendChild(column);
}

function createGrid() {
    let value = prompt("Set grid size");
    gridSize = value;
    if (value <= 100) {
        container.querySelectorAll('*').forEach(n => n.remove());
        value = parseInt(value);
        for (let i = 0; i < value; ++i) {
            createColumn(value);
        }
    } else {
        alert("Maximum grid size is 100!");
    }
}

function eraseGrid() {
    container.querySelectorAll('*').forEach(n => n.remove());
    for (let i = 0; i < gridSize; ++i) {
        createColumn(gridSize);
    }
}

function setBrush() {
    const pixels = document.querySelectorAll("#pixel");
    pixels.forEach(function(pixel) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = brush;
    });
});
};


initGrid();

