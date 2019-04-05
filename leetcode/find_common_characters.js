/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let comparator = countLetters(A[0]);
    
    for (let i = 1; i < A.length; i++) {
        if (!comparator) comparator = countLetters(A[i]);
        let newComparator = {};
        
        for (let j = 0; j < A[i].length; j++) {
            let letter = A[i][j];
            
            if (comparator[letter]) {
                
                if (newComparator[letter]) {
                    newComparator[letter] += 1;
                } else {
                    newComparator[letter] = 1;
                }
                
                comparator[letter] -= 1;
            }
            
            
        }
        
        comparator = newComparator;
        
        
        
    }

    const comparatorKeys = Object.keys(comparator);
    const result = [];

    comparatorKeys.forEach(function(key) {
      let value = comparator[key];

      for (let i = 0; i < value; i++) {
        result.push(key);
      }
    })

    return result;
};

function countLetters(string) {
    let result = {};
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        if (!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter] += 1;
        }
    }
    
    return result;
}
