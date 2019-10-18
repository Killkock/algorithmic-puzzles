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
var widthOfBinaryTree = function(root) {
    const levels = [];
    
    recursive(root, 0, 0)
    
    return levels.reduce((acc, level) => {
        const width = level.slice(-1)[0] - level[0] + 1;
        
        if (acc < width) {
            return width;
        }
        
        return acc;
        
    }, 0);
    
    function recursive(node, level, index) {
        if (!node) {
            return;
        }
        
        if (!levels[level]) {
            levels[level] = [];
        }
        
        levels[level].push(index);
        
        recursive(node.left, level + 1, index * 2);
        recursive(node.right, level + 1, index * 2 + 1);
    
    }
};
