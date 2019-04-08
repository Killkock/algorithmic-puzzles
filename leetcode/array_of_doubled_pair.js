/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    A.sort(function(a, b) {
      return a - b;
    })
    const hash = {};
    for (let i = 0; i < A.length; i++) {
        if (hash[i]) continue;
        
        let val = A[i];
        let searchArea = A.slice(i + 1);

        let index = searchArea.findIndex(function(el, index) {
            if ((el === val * 2 || el * 2 === val) && !hash[index + i + 1]) {
              return true;
            }
        })

        if (!~index) {
          return false;
        }
        index += (i + 1);

        if (hash[index]) continue;
        
        hash[i] = true;
        hash[index] = true;  
       
    }

    return Object.keys(hash).length === A.length
};
