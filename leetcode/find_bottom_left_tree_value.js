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
var findBottomLeftValue = function(root) {
    const levels = {};
    
    recursive(root, 0);
    
    return levels[Math.max.apply(null, Object.keys(levels))];
    
    
    function recursive(node, depth) {
        if (!node) {
            return;
        }
        
        let level = levels[depth];
        
        if (level === undefined) {
            levels[depth] = node.val;
        }
        
        recursive(node.left, depth + 1);
        recursive(node.right, depth + 1);
    }
};
