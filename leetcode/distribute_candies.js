/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candiesAllown = candyType.length / 2;
    const uniqueCandies = [...new Set(candyType)].length;
    return candiesAllown > uniqueCandies ? uniqueCandies : candiesAllown;
};
