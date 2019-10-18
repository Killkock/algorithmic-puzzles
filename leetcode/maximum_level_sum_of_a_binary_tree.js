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
var maxLevelSum = function(root) {
    const levels = [];
    
    recursive(root, 0);
    
    const levelsSums = levels.map(level => level.reduce((acc, el) => acc + el, 0));
    
    return levelsSums.indexOf(Math.max.apply(null, levelsSums)) + 1;
    
    function recursive(node, level) {
        if (!node) {
            return;
        }
        
        if (!levels[level]) {
            levels.push([]);
        }
        
        levels[level].push(node.val);
        
        recursive(node.left, level + 1);
        recursive(node.right, level + 1);
    }
};
