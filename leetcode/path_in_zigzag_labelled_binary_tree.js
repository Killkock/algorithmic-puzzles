/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    const piramidDepth = findMaxDepth(label);
    const startingIndex = findLabelsIndex(label, piramidDepth - 1);

   
    return findParentIndex(startingIndex, piramidDepth - 1, [])
                    .reverse()
                    .map((el, i) => getLabelFromRow(el, i));
  

    function findLabelsIndex(label, depth) {
      const direction = getDirection(depth);
      const corners = getRowCorners(depth);

      return direction ? label - corners[0] : corners[1] - label;
    }
    
    function findMaxDepth(label) {
      let depth = 0;

      while(Math.pow(2, depth) <= label) {
        depth++;
      }

      return depth;
    }
    
    function findParentIndex(index, depth, indexList = []) {
        indexList.push(index);
        if (depth === 0) return indexList;
        
        const isOdd = index % 2 !== 0;
        const parentIndex = !isOdd ? index / 2 : (index - 1) / 2;
        
        return findParentIndex(parentIndex, depth - 1, indexList);
    }

    function getDirection(depth) {
      return depth % 2 === 0 ? 1 : 0;
    }

    function getRowCorners(depth) {
      return [Math.pow(2, depth), Math.pow(2, depth + 1) - 1];
    }

    function getLabelFromRow(index, depth) {
      const direction = getDirection(depth);
      const corners = getRowCorners(depth);

      return direction ? corners[0] + index : corners[1] - index;
    }
    
};
