/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    const max = Math.ceil(b.length / a.length) + 1; 

    for (let i = 0, repeatedStr = ''; i <= max; i++) {
        if (i) repeatedStr += a;
        if (repeatedStr.includes(b)) {
            return i;
        }
    }
    
    return -1;
    
    
};
