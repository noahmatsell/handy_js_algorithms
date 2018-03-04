// Precondition:
// 3 ≤ len(grid) ≤ 10
// all(len(grid[0]) == len(row) for row in grid)

function countNeighbours(data, row, col){
  var s = 0, adj = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1]];
  for (let a of adj){
    let x = row + a[0], y = col + a[1];
    if (data[x] && data[x][y]) s++;
  }
  return s;
}

//test
var assert = require('assert');

assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

assert.equal(countNeighbours([[1, 1, 1],
                              [1, 1, 1],
                              [1, 1, 1]], 0, 2), 3, "Dense corner");

assert.equal(countNeighbours([[0, 0, 0],
                              [0, 1, 0],
                              [0, 0, 0]], 1, 1), 0, "Single");

console.log("Complete");