/**
 * @param {number[]} A
 * @return {number}
 */
 
 // faster solution
 
var minIncrementForUnique = function(A) {
    const uniques = {};
    let counter = 0;

    for (let i = 0; i < A.length; i++) {
      if (uniques[A[i]]) {
        uniques[A[i]]++
      } else {
        uniques[A[i]] = 1;
      }
    }
    
    for (let i = 0; i < A.length; i++) {
      if (uniques[A[i]] > 1) {
        let num = A[i];

        while (uniques[num]) {
            num++
            counter++;
        }

        uniques[num] = 1;
        uniques[A[i]]--;
      }
        
    }
    
    return counter;
};

// good old bruteforce

var minIncrementForUniqueBruteforce = function(A) {
   let counter = 0;
    
    for (let i = 0; i < A.length; i++) {
        while (!isUnique(i, A)) {
            A[i]++;
            counter++;
        }
    }
    
    return counter;
};


function isUnique(i, arr) {
    return !(arr.slice(0, i).includes(arr[i]) || arr.slice(i + 1).includes(arr[i]))
}
