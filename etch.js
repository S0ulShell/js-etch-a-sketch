const container = document.querySelector("#container");

const setSize = document.querySelector("#prompter");
setSize.addEventListener("click", createGrid);

const erase = document.querySelector("#erase");
erase.addEventListener("click", eraseGrid)

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", watchColorPicker, false);



let gridSize = 16;

let userColor = "#fff";
let brush = "grey";
let rainbowActive = false;

function initGrid() {
    let initial = 16;
    for (let i = 0; i < gridSize; i++) {
        createColumn(16);
    }
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
    if (rainbowActive) {
        const pixels = document.querySelectorAll("#pixel");
        pixels.forEach(function (pixel) {
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = randomColor();
            });
        });
    }else {
        const pixels = document.querySelectorAll("#pixel");
        pixels.forEach(function (pixel) {
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = brush;
            });
        });
    }};

    function watchColorPicker(event) {
        userColor = event.target.value;
        brush = userColor;
    };


    document.addEventListener('DOMContentLoaded', function () {
        var rainbow = document.querySelector('#rainbow');
        rainbow.addEventListener('click', function () {
            if (rainbowActive) {
                brush = userColor;
                rainbowActive = false;
                this.classList.toggle('active');
            } else {
                this.classList.toggle('active');
                rainbowActive = true;

                brush = "red";
            }
        });
    });

    function randomColor() {
        var red = (Math.floor(Math.random() * 256));
        var green = (Math.floor(Math.random() * 256));
        var blue = (Math.floor(Math.random() * 256));
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    };

    initGrid();
    setInterval(setBrush, 50);
