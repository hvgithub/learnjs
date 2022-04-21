const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const resolution = 40;
canvas.width = 400;
canvas.height = 400;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

function buildGrid () {
    const grid = new Array(COLS)
        .fill(null)
        .map(() => new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2)));
    return grid;
}

function render (grid) {
    for (let cols = 0; cols < grid.length; cols++) {
        for (let rows = 0; rows < grid[0].length; rows++) {
            cell = grid[cols][rows];

            ctx.beginPath();
            ctx.rect(cols * resolution, rows * resolution, resolution, resolution);
            ctx.fillStyle = cell ? "black" : "white";
            ctx.fill();
            ctx.stroke();
        }
    }
}

function nextGen (grid) {
    const nextGen = grid.map(arr => [...arr]);
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            cell = grid[col][row];
            let numNei = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    let x_cell = col + i;
                    let y_cell = row + j;

                    if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
                        const currentNei = grid[col + i][row + j];
                        numNei += currentNei;
                    }
                }
            }

            if (cell === 1 && numNei < 2) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && numNei > 3) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && (numNei === 2 || numNei === 3)) {
                //cell continues to be 1
            } else if (cell === 0 && numNei === 3) {
                nextGen[col][row] = 1;
            }
        }
    }
    return nextGen;
}

let grid = buildGrid();
console.log(grid);

requestAnimationFrame(update);

function update () {
    grid = nextGen(grid);
    render(grid);
    requestAnimationFrame(update);
}
