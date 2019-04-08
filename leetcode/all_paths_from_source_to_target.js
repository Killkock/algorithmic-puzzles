/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const paths = [];
    
    function recursive(path, graphNode) {
        paths.push(path)
        
        for (let i = 0; i < graphNode.length; i++) {
            recursive(path.concat([graphNode[i]]), graph[graphNode[i]]);        
        }
    }

    recursive([0], graph[0])
    
    return paths.filter(function(el) {
      return el.slice(-1)[0] === graph.length - 1;
    });
};
