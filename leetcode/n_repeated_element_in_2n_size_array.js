/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const counter = {};
    
    for (let i = 0; i < A.length; i++) {
        if (counter[A[i]]) return A[i];
        counter[A[i]] = true;
    }
};
