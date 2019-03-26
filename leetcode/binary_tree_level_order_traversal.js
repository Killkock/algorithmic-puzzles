/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var traversal = [];
    
    function recursive(node, depth) {
        if (!node) return;
        
        if (traversal[depth]) {
            traversal[depth].push(node.val)
        } else {
            traversal[depth] = [node.val];
        }
        
        if (node.left) recursive(node.left, depth + 1);
        if (node.right) recursive(node.right, depth + 1);
        
        
    }
    
    
    recursive(root, 0);
    
    return traversal;
};
