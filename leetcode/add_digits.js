/**
 * @param {number} num
 * @return {number}
 */

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

var addDigits = function(num) {
    num = String(num);
    while (num.length !== 1) {
        let result = 0;
        for (let i = 0; i < num.length; i++) {
            result += +num[i];
        }
        num = String(result);
    }
    return +num;
};
