// Neighbors
// r+1,c; r-1,c; r,c+1; r, c-1;
const islandCount = grid => {
    let visited = new Set();
    let visistedLandSet = new Set();
    let visistedLandUnits = new Map();
    let visistedLandMapRow = new Map();
    let visistedLandMapCol = new Map();

    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let landUnits = explore(
                grid,
                r,
                c,
                visited,
                (count = 0),
                visistedLandSet,
                visistedLandMapRow,
                visistedLandMapCol
            );

            if (landUnits > 0) {
                console.log("landUnits=", landUnits);
                visistedLandUnits.set(count, landUnits);
                count = count + 1;
            }
        }
    }
    /*
    console.log("Visisted=", visited);
    console.log("Lang Only Visisted=", visistedLandSet);
    console.log(
        "Land Map=",
        visistedLandMapRow,
       
        visistedLandMapCol,
        visistedLandUnits
    );
	*/
    //  console.log("Land Map=", visistedLandUnits);

    console.log("Land Units=", visistedLandUnits);

    return count;
};

const explore = (
    grid,
    r,
    c,
    visited,
    count = 0,
    visistedLandSet,

    visistedLandMapRow,
    visistedLandMapCol
) => {
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
    } else {
        // console.log("-->", grid, r, c, "count=", count, "<--\n");
        count++;
        visistedLandSet.add(pos);
        if (!visistedLandMapRow.has(r)) {
            visistedLandMapRow.set(r, []);
        }
        visistedLandMapRow.set(r, [...visistedLandMapRow.get(r), pos]);
        if (!visistedLandMapCol.has(c)) {
            visistedLandMapCol.set(c, []);
        }
        visistedLandMapCol.set(c, [...visistedLandMapCol.get(c), pos]);
    }

    explore(
        grid,
        r - 1,
        c,
        visited,
        count,
        visistedLandSet,

        visistedLandMapRow,
        visistedLandMapCol
    );

    explore(
        grid,
        r + 1,
        c,
        visited,
        count,
        visistedLandSet,

        visistedLandMapRow,
        visistedLandMapCol
    );

    explore(
        grid,
        r,
        c - 1,
        visited,
        count,
        visistedLandSet,

        visistedLandMapRow,
        visistedLandMapCol
    );

    explore(
        grid,
        r,
        c + 1,
        visited,
        count,
        visistedLandSet,

        visistedLandMapRow,
        visistedLandMapCol
    );

    return count;
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
