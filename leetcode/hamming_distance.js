/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.


// Example:
// Input: x = 1, y = 4
// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)

// link to the task: https://leetcode.com/problems/hamming-distance/#/description

var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length > y.length) {
        let difference = Math.abs(x.length - y.length);
        for (let i = 0; i < difference; i++) {
            y = '0' + y;
        }
    } else if (y.length > x.length) {
        let difference = Math.abs(x.length - y.length);
        for (let i = 0; i < difference; i++) {
            x = '0' + x;
        }
    }

    return x.split('').reduce( function(acc, el, i) {
       acc = (el !== y[i]) ? (acc + 1) : acc;
       return acc;
    }, 0);

};
