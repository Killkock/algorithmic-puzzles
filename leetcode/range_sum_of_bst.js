/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {

    var recursiveSum = function(node) {
        if (!node) return 0;
        var val = node.val >= L && node.val <= R ? node.val : 0;

        return val + recursiveSum(node.left) + recursiveSum(node.right);
    }

    return recursiveSum(root);
};
