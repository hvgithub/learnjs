// Neighbors
// r+1,c; r-1,c; r,c+1; r, c-1;
const islandCount = grid => {
    let visited = new Set();
    let visistedLandSet = new Set();
    let visistedLandUnits = new Map();
    let visistedLandMapRow = new Map();
    let visistedLandMapCol = new Map();
    let size = 0;
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if ((size = explore(grid, r, c, visited))) {
                visistedLandUnits.set(count, size);
                count++;
            }
        }
    }

    console.log(visistedLandUnits);
    console.log("Max=", Math.max(...visistedLandUnits.values()));
    console.log("Min=", Math.min(...visistedLandUnits.values()));
};

const explore = (grid, r, c, visited) => {
    const rowInbouund = 0 <= r && r < grid.length;
    const colInbouund = 0 <= c && c < grid[0].length;
    if (!rowInbouund || !colInbouund) return false;
    const pos = r + "," + c;
    if (visited.has(pos)) {
        return false;
    }
    visited.add(pos);
    if (grid[r][c] !== "L") {
        return false;
    }

    let size = 1;
    size += explore(grid, r - 1, c, visited);

    size += explore(grid, r + 1, c, visited);

    size += explore(grid, r, c - 1, visited);

    size += explore(grid, r, c + 1, visited);

    return size;
};

let grid = [
    ["L", "L", "L"],
    ["L", "L", "L"],
    ["L", "L", "L"]
];

grid = [
    ["W", "W"],
    ["W", "W"],
    ["W", "W"]
];

grid = [
    ["L", "W", "W", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["W", "L", "W", "L", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "L", "L", "L"]
];

console.log(islandCount(grid));
