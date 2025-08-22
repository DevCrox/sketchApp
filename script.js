const squareContainer = document.querySelector('.container');
const squaresInput = document.querySelector('#squaresInput')
const generateGridButton = document.querySelector("#generate")
const MAX_SQUARES = 100; // Performance
let isMouseDown = false;

function setGrid(squareAmount) {
    squareContainer.style.setProperty("--grid-size", squareAmount);
    for (let i=0; i < squareAmount * squareAmount; i++) {
        const square = document.createElement("div");
        squareContainer.append(square);
    };
};

function resetGrid() {
    squareContainer.replaceChildren();
};


generateGridButton.addEventListener('click', () => {
    const gridSize = parseInt(squaresInput.value, 10);
    if (gridSize && gridSize <= MAX_SQUARES) {
        resetGrid();
        setGrid(gridSize);
    };
});



document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

squareContainer.addEventListener('mouseenter', (e) => {
    if (isMouseDown && e.target.tagName === "DIV") {      
        let darkness = parseFloat(e.target.dataset.darkness) || 0;

        // increase by 0.1 (10%)
        darkness = Math.min(darkness + 0.1, 1);

        // save it back
        e.target.dataset.darkness = darkness;

        // apply color (black with opacity)
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
    };
}, true);

