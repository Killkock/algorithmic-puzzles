/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].


var intersection = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    return nums1.reduce( function(acc, el) {
        if (~nums2.indexOf(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
};
