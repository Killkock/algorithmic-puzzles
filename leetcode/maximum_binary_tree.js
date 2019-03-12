/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var recursiveFunction = function(arr, node) {
        if (!arr || !arr.length) return null;
    
        var max = findMaxInArray(arr);
        var leftRightArrays = splitByDivider(arr, max);
    
        var node = {
            val: max,
            left: recursiveFunction(leftRightArrays[0]),
            right: recursiveFunction(leftRightArrays[1])
        }
        
        return node;
    }

    return recursiveFunction(nums);
};


var findMaxInArray = function(array) {
    return array.reduce(function(acc, el) {
       if (acc < el) {
           return el;
       }
        
       return acc;
    }, 0);
}

var splitByDivider = function(array, divider) {
    var dividerIndex = array.indexOf(divider);
    
    return [array.slice(0, dividerIndex), array.slice(dividerIndex + 1)];
}
