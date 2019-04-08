/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === B) return true;
    
    let shiftedB = B
    
    for (let i = 0; i < A.length; i++) {
        let newShifted = shiftString(shiftedB)
        if (newShifted !== A) {
            shiftedB = newShifted; 
        } else {
            return true;
        }
    }
    
    return false;
};

function shiftString(str) {
    if (!str) return '';
    return str[str.length - 1] + str.substring(0, str.length - 1);
}
