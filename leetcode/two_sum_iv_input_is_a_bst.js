/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const values = [];
    let isFound = false;
    
    recursive(root);
    
    return isFound;
    
    function recursive(node) {
        if (!node || isFound) return;
        
        if (checkSum(values, node.val)) {
            isFound = true;
            return;
        }
        
        values.push(node.val);
        
        recursive(node.left);
        recursive(node.right);
        
    }
    
    function checkSum(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + num === k) return true;
        }
        
        return false;
    }
};
