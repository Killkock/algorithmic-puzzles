/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {  
    return checkForOnes(root);
    
    function checkForOnes(node) {
        if (!node) {
            return null;
        }
        
        node.left = checkForOnes(node.left);
        node.right = checkForOnes(node.right);
        
        const hasOnes = node.left || node.right || node.val;
        
        return hasOnes ? node : null;
    } 
};
