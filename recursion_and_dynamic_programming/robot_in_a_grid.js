/* Question 8.2
Robot in a Grid: Imagine a robot sitting on the upper left corner
of grid with r rows and c columns. The robot can only move in
two directions, right and down, but certain cells are "off limits"
such that the robot cannot step on them.
Design an algorithm to find a path for the robot from the top left
to the bottom right.
*/
// Time is O(r*c) where r is the number of rows & c is the number of columns in grid,
// Space is O(r*c) since memo cache has r*c entries
function robotInAGrid(grid) {
    // init cache for memoization
    const memo = [];
    for (let r = 0; r < grid.length; r++) {
        memo[r] = [];
        for (let c = 0; c < grid[r].length; c++) {
            memo[r][c] = grid[r][c] === 1;
        }
    }

    return topDown(grid, 0, 0, [], memo);
}

function topDown(grid, r, c, path, memo) {
    // base case
    if (r < 0 || r >= grid.length || c < 0 || grid[r] === undefined || c >= grid[r].length) {
        return [];
    } else if (memo[r][c] === false) {
        return [];
    }

    const newPath = [...path];
    newPath.push([r, c]);

    if (r === grid.length - 1 && c === grid[r].length - 1) {
        return newPath;
    }

    // Go right
    const rightPath = topDown(grid, r, c + 1, newPath, memo);
    // Go down
    const downPath = topDown(grid, r + 1, c, newPath, memo);

    if (rightPath.length > 0) {
        return rightPath;
    } else if (downPath.length > 0) {
        return downPath;
    } else {
        memo[r][c] = false;
        return newPath;
    }
}

/* notes

input grid is a 2d array
if grid[r][c] == 1, cell can be traversed
if grid[r][c] == 0, cell is off limit

robot starts at top left of grid at grid[0][0].
robot can only move in 2 directions:
- right => grid[r][c+1]
- down => grid[r+1][c]

We can remove duplicate calculations by using a cache for memoization.
if a the robot has previously traversed down memo[r][c], we will set
it to a boolean value depending on if there's a possible path down it.
memo[r][c] = boolean

Output will be a list representing a path from top left -> bottom right of grid.
*/

const input = [
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
];

console.log(robotInAGrid(input)); // output [[0,0], [1,0], [2, 0], [2, 1], [2, 2], [2, 3], [3,3]]