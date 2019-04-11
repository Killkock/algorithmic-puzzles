/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafs1 = [];
    const leafs2 = [];
    
    function getLeafs(node, arr) {
        if (!node) return;
        if (!node.left && !node.right) {
            arr.push(node.val);
            return;
        }
        
        getLeafs(node.left, arr);
        getLeafs(node.right, arr);
    }
    
    getLeafs(root1, leafs1);
    getLeafs(root2, leafs2);
    
    for (let i = 0; i < leafs1.length; i++) {
        if (leafs1[i] !== leafs2[i]) return false;
    }
    
    return true && leafs1.length === leafs2.length;
};
