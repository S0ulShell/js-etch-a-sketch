const container = document.querySelector("#container");

const setSize = document.querySelector("#prompter");
setSize.addEventListener("click", createGrid);


function initGrid() {
    let initial = 16;
    for (let i = 0; i < initial; i++) {
        createColumn(16);
    }
}

function createColumn(int){
    const column = document.createElement("div");
    column.classList.add("column");
    for (let i = 0; i < int; ++i){
        const div = document.createElement("div");
        div.classList.add("pixel");
        column.appendChild(div);
    }
    container.appendChild(column);
}

function createGrid() {
    let value = prompt("Set grid size");
    container.querySelectorAll('*').forEach(n => n.remove());
    value = parseInt(value);
    for (let i = 0; i < value; ++i) {
        createColumn(value);
    }
}

initGrid();
