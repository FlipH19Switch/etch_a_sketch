const container = document.querySelector('#container');

function createGrid() {
    let gridSideLength = +prompt("How many squares per side would you like?", );
    
    while (gridSideLength > 100) {
        gridSideLength = +prompt("That is too large. Please enter a maximum of 100 squares.", )
    }
    
    // creates grid rows
    for (let i = 0; i < gridSideLength; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.id = 'grid-row';
        container.appendChild(gridRow);
    }

    const gridRowAll = document.querySelectorAll('#grid-row');
    
    // creates squares in each row
    gridRowAll.forEach((gridRowSingle) => {
        for (let j = 0; j < gridSideLength; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.id = 'grid-square';
            gridRowSingle.appendChild(gridSquare);
        }
    })

    // add container class after grid is created
    container.classList.add('container');

    // change background of hovered squares
    // hover must be inside function in order to query id added inside function
    const hoveredSquares = document.querySelectorAll('#grid-square');
    hoveredSquares.forEach(hoveredSquare => hoveredSquare.addEventListener('mouseover', (e) => {
        let randomColorParam1 = Math.floor(Math.random()*255);
        let randomColorParam2 = Math.floor(Math.random()*255);
        let randomColorParam3 = Math.floor(Math.random()*255);
        e.target.style.background = `RGB(${randomColorParam1},${randomColorParam2},${randomColorParam2})`
    }))
}



btn.addEventListener('click', () => {
    
    // remove existing grid by removing rows
    if(document.getElementById("grid-row")) {
        const gridRowRemoveAll = document.querySelectorAll('#grid-row');
        gridRowRemoveAll.forEach((gridRowRemoveSingle) => {
            container.removeChild(gridRowRemoveSingle);
        })
    }
    
    createGrid()
})