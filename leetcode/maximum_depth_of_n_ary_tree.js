/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    const depthList = [0];
    
    recursive(root, 1);
    return Math.max.apply(null, depthList);
    
    function recursive(node, depth) {
        if (!node) {
            return;
        } 
        
        depthList.push(depth);
        
   
        for (let i = 0; i < node.children.length; i++) {
            recursive(node.children[i], depth + 1);
        }
    }
};
