var btreeGameWinningMove = function(root, n, x) {
    const nodes = {};
    findNode(root, x, nodes);
    const { chosenNode } = nodes;
    
    
    const possibleSums = [
        findSubtreeSum(root, x),
        findSubtreeSum(chosenNode.left),
        findSubtreeSum(chosenNode.right)
    ];
      
    const deltas = [
        possibleSums[1] + possibleSums[2] + 1,
        possibleSums[0] + possibleSums[2] + 1,
        possibleSums[0] + possibleSums[1] + 1 
    ];
    
    for (let i = 0; i < 3; i++) {
        if (possibleSums[i] > deltas[i]) {
            return true;
        }
    }
    
    return false;
    
    function findNode(node, val, nodes) {
        if (!node) {
            return;
        }
        
        if (node.val === val) {
            nodes.chosenNode = node;
        }
        
        findNode(node.left, val, nodes);
        findNode(node.right, val, nodes);
    }
    
    function findSubtreeSum(node, stopNode) {
        if (!node || node.val === stopNode) {
            return 0;
        }
        
        return 1 + 
               findSubtreeSum(node.left, stopNode) + 
               findSubtreeSum(node.right, stopNode);
    }
};
