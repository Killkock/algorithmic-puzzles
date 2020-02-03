/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    let tree = S;
    
    return recursive();

    function recursive(depth = 0) {
      const { depthLevel, val, nextString } = spliceNode(tree);
        
      if (depthLevel !== depth) {
        return null;
      }

      tree = nextString;

      return {
        val,
        left: recursive(depth + 1),
        right: recursive(depth + 1)
      }
    }
    
    function spliceNode(str) {
      let depthLevel = 0;
      let isLevelCounts = true;
      let val = '';
      let breakIndex = str.length;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' && isLevelCounts) {
          depthLevel++;
        } else if (str[i] === '-' && !isLevelCounts) {
          breakIndex = i;
          break;
        } else {
          val += str[i];
          isLevelCounts = false;
        }
      };

      val = Number(val);
        
      const nextString = str.slice(breakIndex)

      return {
        depthLevel,
        val,
        nextString
      }
    }
};
