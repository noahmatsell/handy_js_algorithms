// Precondition:
// 0 < len(matrix) ≤ 10
// all(len(row) == len(matrix) for row in matrix)
// all(all(0 < x < 10 for x in row) for row in matrix)

function weakPoint(matrix){
    let rows = [];
    let cols = [];
    for (let i = 0; i < matrix.length; i++) {
        rows.push(matrix[i]);
        cols.push(matrix.map(j => j[i]));
    }
    let weakRows = [];
    rows.forEach((i) => weakRows.push(i.reduce((a, b) => a + b)));
    let weakCols = [];
    cols.forEach((i) => weakCols.push(i.reduce((a, b) => a + b)));
    return [weakRows.indexOf(Math.min(...weakRows)), weakCols.indexOf(Math.min(...weakCols))]
}

//test
var assert = require('assert');

assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                            [2, 9, 4, 1, 7],
                            [3, 8, 6, 2, 4],
                            [2, 5, 2, 9, 1],
                            [6, 6, 5, 4, 5]]
                            ), [3, 3], "Example");
assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                            [2, 8, 1, 1, 7],
                            [3, 8, 6, 2, 4],
                            [2, 5, 2, 9, 1],
                            [6, 6, 5, 4, 5]]
                            ), [1, 2], "Two weak point");

assert.deepEqual(weakPoint([[1, 1, 1],
                            [1, 1, 1],
                            [1, 1, 1]]
                            ), [0, 0], "Top left");