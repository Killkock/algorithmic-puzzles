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
var findFrequentTreeSum = function(root) {
    const sums = [];
    
    subtreeSum(root);
    
    const counter = sums.reduce((acc, el) => {
        if (!acc[el]) {
            acc[el] = 0;
        }
        
        acc[el]++;
        
        return acc;
    }, {});
    
    const maxSumOccurence = Math.max.apply(null, Object.values(counter));
    const mostFrequentSums = Object.keys(counter).reduce((acc, key) => {
        if (counter[key] === maxSumOccurence) {
            for (let i = 0; i < maxSumOccurence; i++) {
                acc.push(+key);
            }
        }
        
        return acc;
    }, []);
    
    return [...new Set(mostFrequentSums)];
    
    function subtreeSum(node) {
        if (!node) {
            return 0;
        }
        
        const sum = node.val + subtreeSum(node.left) + subtreeSum(node.right);
        
        sums.push(sum);
        
        return sum;
    }
};
