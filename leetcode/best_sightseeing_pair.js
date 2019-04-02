/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = 0;
    
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let score = A[i] + A[j] + i - j;
            max = score > max ? score : max;

        } 
    }
    
    return max;
};
