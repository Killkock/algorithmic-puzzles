/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function(nums) {
    let numsLng = nums.length;
    nums = [...new Set(nums)].sort( (a, b) => a - b);
    let result = [];

    for (let i = 1; i < nums[0]; i++) {
        result.push(i);
    }

    nums.forEach( function(elem, i) {
        if (elem + 1 !== nums[i + 1]) {
            for (let j = elem + 1; j < nums[i + 1]; j++) {
                result.push(j);
            }
        }
    });

    for (let i = nums.slice(-1)[0] + 1; i <= numsLng; i++) {
        result.push(i);
    }

    return result;
};
