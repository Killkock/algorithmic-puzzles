/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let lng = nums.length;
    let copy = nums.slice();

    return copy.reduce(function(acc, el, index) {
        let newIndex = (index + k) % lng;
        acc[newIndex] = el;
        return acc;
    }, nums)
};
