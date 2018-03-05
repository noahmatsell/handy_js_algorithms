// Precondition:
// A text contains only ASCII symbols.
// 0 < len(text) ≤ 105

function mostWanted(data) {
    s = data.toLowerCase().split("").sort()
    max = 0
    for(c of "abcdefghijklmnopqrstuvwxyz".split("")){
        n = s.indexOf(c) >= 0 ? s.lastIndexOf(c) - s.indexOf(c) + 1 : 0
        if(n > max){
            max = n
            maxc = c
        }
    }
    return maxc
}

var assert = require('assert');

assert.equal(mostWanted("Hello World!"), "l", "1st example");
assert.equal(mostWanted("How do you do?"), "o", "2nd example");
assert.equal(mostWanted("One"), "e", "3rd example");
assert.equal(mostWanted("Oops!"), "o", "4th example");
assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
console.log("Complete");