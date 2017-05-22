/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    return nums.sort().reduce( function(acc, el) {
        if (el === acc.slice(-1)[0]) {
            acc.pop();
            return acc;
        }
        acc.push(el);
        return acc;
    }, [])[0];
};

 
