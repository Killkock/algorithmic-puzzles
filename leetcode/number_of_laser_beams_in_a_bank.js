/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const getLineBeams = (line) => line.split('').reduce((acc, el) => +acc + +el, 0);
    let previousLineSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < bank.length; i++) {
        if (!previousLineSum) {
            previousLineSum = getLineBeams(bank[i]);
            continue;
        }
             
        const currentLineSum = getLineBeams(bank[i]);
        currentSum += previousLineSum * currentLineSum;
        previousLineSum = currentLineSum || previousLineSum;
    }
    
    return currentSum; 
};
