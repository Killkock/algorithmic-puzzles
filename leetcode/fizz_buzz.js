/**
 * @param {number} n
 * @return {string[]}
 */

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result.map(function(el) {
        if (el % 5 === 0 && el % 3 === 0) {
            return 'FizzBuzz';
        } else if (el % 3 === 0) {
            return 'Fizz';
        } else if (el % 5 === 0) {
            return 'Buzz';
        }
        return String(el);
    });
};
