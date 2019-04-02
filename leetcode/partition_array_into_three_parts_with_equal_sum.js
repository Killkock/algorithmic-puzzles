/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce(function(acc, el) {
        return acc + el;
    }, 0);
    
    if (sum % 3 !== 0) return false;
    
    let onePart = sum / 3;   
    let partSum = 0;
    let partsCounter = 0;
    
    for (let i = 0; i < A.length; i++) {
        partSum += A[i];
        
        if (partSum === onePart) {
            partsCounter++;
            partSum = 0;
        }
    }
    
    return partsCounter === 3;
};
