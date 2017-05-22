/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.


var majorityElement = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    console.log(obj)
    for (let key in obj) {
        if (obj[key] > (nums.length / 2)) {
            return +key;
        }
    }
};
