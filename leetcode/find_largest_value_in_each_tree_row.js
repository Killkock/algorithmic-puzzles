/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    const values = [];
    
    recursive(root, 0);
    
    return values.map((el) => Math.max(...el));
    
    function recursive(node, level) {
        if (!node) return;
        
        if (!values[level]) {
            values[level] = [];
        }
        
        values[level].push(node.val);
        
        recursive(node.left, level + 1);
        recursive(node.right, level + 1);
    }
    
    
};
