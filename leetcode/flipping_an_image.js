/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(function(arr) {
        return arr.map(function(el) {
            return (!el ? 1 : 0);
        }).reverse();
    })
};
