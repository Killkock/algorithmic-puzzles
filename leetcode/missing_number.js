/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length + 1;
    const sum = (n * (0 + n - 1)) / 2;
    
    return sum - nums.reduce((acc, el) => acc + el, 0);
    
};
