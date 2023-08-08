/*
Make 16 x 16 = 256 unique containers within #container via Javascript
Containers must have a 16 x 16 grid layout via Flexbox
Containers must share same styling and be interactive via hover
*/

const container = document.querySelector('#container');
const gridSquareNumber = 16 * 16

// create the grid
for (let i = 0; i < gridSquareNumber; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.id = "grid-square";
    container.appendChild(gridSquare);
}

// change background of hovered squares
const hoveredSquares = document.querySelectorAll('#grid-square');
hoveredSquares.forEach(hoveredSquare => hoveredSquare.addEventListener('mouseover', () => {
    hoveredSquare.classList.add('hover')
}))