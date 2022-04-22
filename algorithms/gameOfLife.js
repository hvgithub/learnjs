function nextGen (grid) {
    let newGrid = grid.map(arr => [...arr]);
    console.log(`grid=${grid}, newGrid=${newGrid}`);
    const ROWS = grid.length;
    const COLS = grid[0].length;
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let cell = grid[row][col];
            console.log("cell=", cell);
            let numNei = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    let x_cell = row + i;
                    let y_cell = col + j;

                    if (x_cell >= 0 && y_cell >= 0 && x_cell < ROWS && y_cell < COLS) {
                        let currentNei = grid[x_cell][y_cell];
                        numNei += currentNei;
                        /* console.log(
							"x_cell, y_cell, numNei, currentNei",
                            x_cell,
                            y_cell,
                            numNei,
                            currentNei
                        ); */
                    }
                }
            }

            if (cell === 1 && numNei < 2) {
                newGrid[row][col] = 0;
            } else if (cell === 1 && (numNei === 2 || numNei === 3)) {
                // no change
            } else if (cell === 1 && numNei > 3) {
                newGrid[row][col] = 0;
            } else if (cell === 0 && numNei === 3) {
                newGrid[row][col] = 1;
            }
            console.log(`Current= ${grid[row][col]}, nextGen=${newGrid[row][col]}`);
        }
    }
    return newGrid;
}

let grid = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

/* grid = [
    [1, 1],
    [1, 0]
]; */
console.log("nextGen Cell=", nextGen(grid));
