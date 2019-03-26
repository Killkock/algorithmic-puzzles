/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
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
        
        for (let i = 0; i <= node.children.length; i++) {
            recursive(node.children[i], depth + 1);
        }
    }
    
    
    recursive(root, 0);
    
    return traversal;
};

