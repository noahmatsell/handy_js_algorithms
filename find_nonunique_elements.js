// Precondition:
// 0 < len(data) < 1000

function nonUnique(data) {
    return data.filter(function(a){
        return data.indexOf(a) !== data.lastIndexOf(a)    
    });
}

//test
var assert = require('assert');

assert.deepEqual(nonUnique([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
assert.deepEqual(nonUnique([1, 2, 3, 4, 5]), [], "2nd example");
assert.deepEqual(nonUnique([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
assert.deepEqual(nonUnique([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
assert.deepEqual(nonUnique(['P', 7, 'j', 'A', 'P', 'N', 'Z', 'i',
    'A', 'X', 'j', 'L', 'y', 's', 'K', 'g',
    'p', 'r', 7, 'b']), ['P', 7, 'j', 'A', 'P', 'A', 'j', 'p', 7], "Letters");
console.log("Complete");
