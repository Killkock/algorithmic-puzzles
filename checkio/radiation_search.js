// https://js.checkio.org/mission/radiation-search

"use strict";

function radiationSearch(data) {
    var visitedCells = [],
        joinedCells = [],
        i,
        j,
        result;

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {
            joinedCells.push(checkCell(i, j));
        }
    }

    joinedCells.sort( (a, b) => a.length - b.length );
    result = joinedCells.slice(-1)[0];

    return [result.length, result[0]];

    function checkCell(x, y) {
        var groupOfCells = [];

        iter(x, y, data[x][y]);

        return groupOfCells;

        function iter(x, y, cell) {
            if (data[x] && data[x][y] === cell && !wasCellVisited(x, y)) {
                groupOfCells.push(cell);
                visitedCells.push([x, y]);
                iter(x + 1, y, cell);
                iter(x - 1, y, cell);
                iter(x, y + 1, cell);
                iter(x, y - 1, cell);
            }
        }
    }
    function wasCellVisited(x, y) {
        for (var i = 0; i < visitedCells.length; i++) {
            if (visitedCells[i][0] === x && visitedCells[i][1] === y) {
                return true;
            }
        }

        return false;
    }
}
