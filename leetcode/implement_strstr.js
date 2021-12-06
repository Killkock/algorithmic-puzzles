/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    
    for (let i = 0, needleLng = needle.length; i < haystack.length; i++) {
        if (haystack.slice(i, i + needleLng) === needle) {
            return i;
        }
    }
    
    return -1;
};
