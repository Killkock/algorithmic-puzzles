/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var verticalSkyline = [];
    var horizontalSkyline = [];
    var count = 0;

    for (let i = 0; i < grid.length; i++) {
      verticalSkyline.push(getColumnMax(i, grid));
      horizontalSkyline.push(getRowMax(i, grid));
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        let verticalMax = verticalSkyline[j];
        let horizontalMax = horizontalSkyline[i];
        let maxSkylineValue = Math.min(verticalMax, horizontalMax);

        count += maxSkylineValue - grid[i][j]
      }
    }

    return count;
};

var getColumnMax = function(pos, grid) {
  return grid.reduce(function(acc, el) {
    return el[pos] > acc ? el[pos] : acc;
  }, 0);
}

var getRowMax = function(pos, grid) {
  return grid[pos].reduce(function(acc, el) {
    return acc > el ? acc : el;
  }, 0);
}
