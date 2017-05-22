/**
 * @param {number[][]} grid
 * @return {number}
 */

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:

// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16

// Link to the task: https://leetcode.com/problems/island-perimeter/#/description

var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                let surr = numOfSurrounding(i, j);
                surr = surr.filter( el => grid[el[0]] !== undefined);
                surr = surr.filter( el => grid[el[0]][el[1]] === 1);
                perimeter += 4 - surr.length;

            }
        }
    }
    return perimeter;
};

function numOfSurrounding(fI, sI) {
  return [[fI, sI + 1], [fI, sI - 1], [fI + 1, sI], [fI - 1, sI]];
}
