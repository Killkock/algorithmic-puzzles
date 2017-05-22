/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

var hammingWeight = function(n) {
    n = n.toString(2);
    return n.split('').reduce( (acc, el) => acc += +el, 0 );
};
