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
var maxDepth = function(root) {
    const depth = [0];
    
    recursive(root, 1);
    
    return Math.max.apply(null, depth);
    
    function recursive(node, level) {
        if (!node) {
            return;
        }
        
        depth.push(level);
        
        recursive(node.left, level + 1);
        recursive(node.right, level + 1);
    }
};
