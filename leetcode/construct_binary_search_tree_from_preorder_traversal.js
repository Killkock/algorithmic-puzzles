/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    const root = new TreeNode();
    constructNode(root, preorder[0], ...getLeftAndRightNodes(preorder[0], preorder.slice(1)));
    
    return root;
    
    
    function constructNode(node, val, left, right) {
        node.val = val;
        
        if (left.length > 0) {
            node.left = new TreeNode();
            constructNode(node.left, left[0], ...getLeftAndRightNodes(left[0], left.slice(1)));
        }
        
        if (right.length > 0) {
            node.right = new TreeNode();
            constructNode(node.right, right[0], ...getLeftAndRightNodes(right[0], right.slice(1)))
        }
        
        
    }
    
    function getLeftAndRightNodes(el, arr) {
        return arr.reduce((acc, node) => {
            const i = node > el ? 1 : 0;
            acc[i].push(node);
            return acc;
        }, [[], []]);
    }

};
