/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const isRepeated = (substr) => {
        if (s.length % substr.length !== 0) return false;
        if (s === substr) return false;
        
        for (let i = 0; i < s.length; i += substr.length) {
            if (s.slice(i, i + substr.length) !== substr) {
                return false;
            }  
        }
        
        return true;
    }
    
    for (let i = 0; i < s.length / 2; i++) {
        const substr = s.slice(0, i + 1);
        
        if (isRepeated(substr)) {
            return true;   
        }
        
    }
    return false;
};
