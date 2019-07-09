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
var bstToGst = function(root) {
    const nodes = [];
    
    getAllNodes(root);
    increaseAllNodes(root);
    
    function increaseAllNodes(node) {
        if (!node) return;
        
        node.val = getGreaterSum(node.val);
        increaseAllNodes(node.left);
        increaseAllNodes(node.right);
        
        function getGreaterSum(num) {
            return nodes.reduce((acc, el) => el >= num ? el + acc : acc, 0);
        }
    }
    
    function getAllNodes(node) {
        if (!node) return;
        
        nodes.push(node.val);
        getAllNodes(node.left);
        getAllNodes(node.right);
    }
    
    return root;
    
};
