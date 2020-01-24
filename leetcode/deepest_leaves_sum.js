/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const deepest = { level: 0, sum: 0 };
    
    recursive(root);
    
    return deepest.sum;
    
    function recursive(node, level = 0) {
        if (!node) return;
        
        if (level === deepest.level) {
            deepest.sum += node.val;
        }
        
        if (level > deepest.level) {
            deepest.sum = node.val;
            deepest.level = level;
        }
        
        recursive(node.left, level + 1);
        recursive(node.right, level + 1);
    }
};
