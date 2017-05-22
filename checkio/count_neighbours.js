// https://js.checkio.org/mission/count-neighbours/solve/

"use strict";

function countNeighbours(data, row, col) {
    var neighbours = determineNeighbours(row, col);
    var howMuch = 0;

    console.log(neighbours);

    for (var i = 0; i < neighbours.length; i++) {


        if (data[neighbours[i][0]] !== undefined && data[neighbours[i][0]][neighbours[i][1]] !== undefined) {
            if (data[neighbours[i][0]][neighbours[i][1]] === 1) {
                howMuch++;
            }
        }
    }

    return howMuch;
}

function determineNeighbours(row, col) {
    var neighbours = [];

    for (var i = row - 1; i <= row + 1; i++) {
        for (var j = col - 1; j <= col + 1; j++) {
            if (i == row && j == col) {
              continue;
            }
            neighbours.push([i, j]);
        }
    }


    return neighbours;

}
