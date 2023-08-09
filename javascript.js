/*
Make 16 x 16 = 256 unique containers within #container via Javascript
Containers must have a 16 x 16 grid layout via Flexbox
Containers must share same styling and be interactive via hover
*/



const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    createGrid()
})

function createGrid() {
    let gridSideLength = +prompt("How many squares per side would you like?", );
    
    while (gridSideLength > 100) {
        gridSideLength = +prompt("That is too large. Please enter a maximum of 100 squares.", )
    }
    
    // creates grid
    for (let i = 0; i < Math.pow(gridSideLength,2); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.id = "grid-square";
        container.appendChild(gridSquare);
    }

    // adds outline to parent div only after grid is created
    container.classList.add('container');
}



// change background of hovered squares
const hoveredSquares = document.querySelectorAll('#grid-square');
hoveredSquares.forEach(hoveredSquare => hoveredSquare.addEventListener('mouseover', () => {
    hoveredSquare.classList.add('hover')
}))