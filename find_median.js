// Precondition: 
// 1 < len(data) ≤ 1000
// all(0 ≤ x < 10 ** 6 for x in data)

function median(data) {
  data = data.sort((a, b) => a - b)
  n = Math.floor(data.length / 2)
  return (data[n] + data[data.length - 1 - n]) / 2
}

//test
var assert = require('assert');

assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
console.log("Complete");